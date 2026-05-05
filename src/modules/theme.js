export default class ThemeManager {
    constructor (theme){
        this.theme = {
                striped : false ,
                width : "fit" , 
                mode : "system",
                maxHeight : "auto" ,
                boder : {
                    mode : "row"
                }, 
                density : 'default' ,
                hover : false  ,
                ...theme
        }
    }

    setTheme(newTheme){
        this.theme = {...this.theme , newTheme}
    }

    getTheme(){
        return this.theme
    }
}