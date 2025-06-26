const withLog = (Component) => {
    function ComponentWithLog(){
        console.log('mensajito')
        return(
            <Component {...props}/>
        )
    }

    return ComponentWithLog
}

export default withLog