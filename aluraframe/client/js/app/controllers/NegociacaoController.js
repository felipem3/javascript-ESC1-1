class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);
        // let inputQuantidade = document.querySelector('#quantidade');
        // let inputData = document.querySelector('#data');
        // let inputValor = document.querySelector('#valor');
        this._inputQuantidade = $('#quantidade');
        this._inputData = $('#data');
        this._inputValor = $('#valor');
    }
    adiciona(event){
        event.preventDefault();
        
        // let data = new Date(...this._inputData.value.split('-').map(
        //     function (item,index) {
        //         if(index == 1){
        //             return item-1;
        //         }
        //         return item;}
        //     ));
       
        //----ARROW FUNCTION
        // let data = new Date(...this._inputData.value.split('-').map(
        //     (item,index) => {
        //         if(index == 1){
        //             return item-1;
        //         }
        //         return item;}
        //     ));

        let data = new Date(...this._inputData.value.split('-').map((item,index) => item-index % 2));

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );
        console.log(negociacao);
    }
}