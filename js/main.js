/*================DATA=======================*/
var mixArr = {
	strong: ["Glug of rum", "slug of whisky", "splash of gin"],
	salty: ["Olive on a stick", "salt-dusted rim", "rasher of bacon"],
	bitter: ["Shake of bitters", "splash of tonic", "twist of lemon peel"],
	sweet: ["Sugar cube", "spoonful of honey", "splash of cola"],
	fruity: ["Slice of orange", "dash of cassis", "cherry on top"]	
}

var questionsArr = [		
		'Do ye like yer drinks strong?',
		'Do ye like it with a salty tang?',
		'Are ye a lubber who likes it bitter?',
		'Would ye like a bit of seetness with yer poison?',
		"Are ye one for a fruity finish?"
];

/*================MODEL======================*/
var Bartender = function(mix, questions){
    this.mix = mix;
    this.questions = questions;
    this.currentQuestion = 0;
    this.answers = [];
}

//some other functions
Bartender.prototype.createDrink = function(){

}

Bartender.prototype.setAnswer = function(answer) {
	this.answer.push(answer);
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

    this.yes.click(this.yesBtnHandler);
    this.no.click(this.noBtnHandler);
    this.noClick = null;
}

View.prototype.displayQuestion = function(question){
    this.questions.html(question);
}

View.prototype.yesBtnHandler = function() {
	this.onClick(true, 'strong');
}

View.prototype.noBtnHandler = function() {
	this.onClick(false, 'Strong');
}


/*===============CONTROLLER=================*/
var Controller = function(model, view){
    this.model = model;
    this.view = view;

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
		this.model.setAnswer(answer);
	}
}

/*========================APP========================*/
$(document).ready(function(){
    var view = new View();
    var bartender = new Bartender(mixArr, questionsArr);
    var controller = new Controller(bartender, view);

    controller.showQuestion();

});
