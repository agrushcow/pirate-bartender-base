/*================DATA=======================*/
var mixArr = {
	strong: ["Glug of rum", "slug of whisky", "splash of gin"],
	salty: ["Olive on a stick", "salt-dusted rim", "rasher of bacon"],
	bitter: ["Shake of bitters", "splash of tonic", "twist of lemon peel"],
	sweet: ["Sugar cube", "spoonful of honey", "splash of cola"],
	fruity: ["Slice of orange", "dash of cassis", "cherry on top"]	
}

var questionsArr = [
	{		
		flavor: 'Strong',
		text: 'Do ye like yer drinks strong'
	},
	{
		flavor: 'Salty',
		text: 'Do ye like yer drinks strong?'
	},
	{
		flavor: 'Bitter',
		text: 'Are ye a lubber who likes it bitter?'
	},
	{
		flavor: 'Sweet',
		text: 'Would ye like a bit of seetness with yer poison?'
	},
	{
		flavor: 'Fruity',
		text: "Are ye one for a fruity finish?"
	},
];

/*================MODEL======================*/
var Bartender = function(mix, questions){
    this.mix = mix;
    this.questions = questions;
    this.currentQuestion = 0;
    this.answers = [];
}

//some other functions
Bartender.prototype.createDrink = function(flavor, ingredient){
	//this.flavor = this.mixArr[this.answers];
	//this.ingredient = this.mixArr[this.answers];
}

Bartender.prototype.increment = function() {
	this.currentQuestion++;
}

Bartender.prototype.setAnswer = function(answer) {
	this.answers.push(answer);
}

Bartender.prototype.getCurrentQuestion = function(){
    return this.questions[this.currentQuestion];
}

/*================VIEW====================*/

var View  = function(){
    this.questions = $('.question h3');
    this.drink = $('.drink');
    this.yes = $('#yes');
    this.no = $('#no');
    this.currentFlavor = '';

    this.yes.click(this.yesBtnHandler.bind(this));
    this.no.click(this.noBtnHandler.bind(this));
    this.onClick = null;
}

View.prototype.displayQuestion = function(question){
    this.questions.html(question.text);
    this.currentFlavor = question.flavor;
}

View.prototype.yesBtnHandler = function() {
	console.log("Yes btn clicked, view.")
	this.onClick(true, 'Strong');
}

View.prototype.noBtnHandler = function() {
	this.onClick(false, 'Strong');
}

/*===============CONTROLLER=================*/
var Controller = function(model, view){
    this.model = model;
    this.view = view;

    this.view.onClick = this.answerQuestion.bind(this);

    //do some binding here
}

Controller.prototype.showQuestion = function(){
    this.view.displayQuestion(this.model.getCurrentQuestion());
}

Controller.prototype.showQuestion = function() {
	this.view.displayQuestion(this.model.getCurrentQuestion());
}

Controller.prototype.answerQuestion = function(answer, flavor) {
	if (answer) {
		console.log("The yes button was clicked, controller.")
		this.model.setAnswer(answer);
	}
	this.model.increment(); // go to next question
	this.view.displayQuestion(this.model.getCurrentQuestion());
}

/*========================APP========================*/
$(document).ready(function(){
    var view = new View();
    var bartender = new Bartender(mixArr, questionsArr);
    var controller = new Controller(bartender, view);

    controller.showQuestion();

});
