var numeros = 100;
for(var i = 1; i <= numeros; i++){
    if(i%3 == 0 && i%7 == 0) {
        document.write('fizz - woff')
    } else if(i%5 == 0 && i%7 == 0) {
        document.write('buzz - woff')
    } else if(i%3 == 0 && i%5 == 0){
        document.write('fizz-buzz');
    } else {
        if(i%3 == 0){
            document.write('fizz');
        } else if(i%5 == 0){
            document.write('buzz');
        } else if(i%7 == 0) {
            document.write(' woff');
        } else {
            document.write(i);
        }
    }
    document.write('<br>');
}