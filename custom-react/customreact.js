function CustomRender(reactElement,container){
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    for(let i in reactElement.props){
        domElement.setAttribute(i,reactElement.props[i])

    }
    container.appendChild(domElement)
}

const reactElement={
    type:"a",
    props:{
        href:"http://www.google.com",
        target:"_blank",
        
    },
    children:"Click me to vsit google"
}

const mainContainer=document.querySelector('#root')
CustomRender(reactElement,mainContainer)