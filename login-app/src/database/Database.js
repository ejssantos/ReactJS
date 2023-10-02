const coreDatabase = {
   url: 'http://scmweb09/webservice/api',
   monta_url_select(chave) {
     return `${this.url}/${chave}/select/param_json`;
   },
   monta_url_insert(chave) {
     return `${this.url}/${chave}/insert/param_json`;
   },
   makeParam(params){
     return `param_json=${JSON.stringify(params)}` ;  
   } 
}   

export default coreDatabase; 