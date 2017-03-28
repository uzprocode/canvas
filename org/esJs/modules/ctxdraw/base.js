// import $ from 'jquery';
class base {
    constructor() {
        this.a = 'a';
    }
    getA() {return this.a}
    go(){
      console.log('base to go');
    }
}

module.exports = base;
