try {
    s = s.split('')
    s.reverse()
    s = s.join('');
}　catch(e) {
    console.log(e.message);
}　finally {
    console.log(s);
}