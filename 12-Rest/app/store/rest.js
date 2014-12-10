Ext.define('Extjs.store.rest',
{
    extend: 'Ext.data.Store',
    storeId: 'Rest',
    proxy: {
        url: 'http://localhost:80/about',
        type: 'rest',
        reader: {
            rootProperty:'',
            type: 'json'
        }                
    }    
});