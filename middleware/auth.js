export default function (context) {
    if(context.store.state.user){
        context.redirect()
    }
    else {
        context.redirect('/login')
    }
}