var me = 'emma1';
a();
function a() {
    var me = 'emma2';
    b();
}
function b() {
    console.log(me);
}