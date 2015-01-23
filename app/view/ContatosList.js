Ext.define('Touch2Demo.view.ContatosList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.contatosList',
    config: {
	store: 'usuarioLogado',
	itemTpl: '{codFunc}',  
	onItemDisclosure: true,
	items: [
	    {
		docked: 'top',
		xtype: 'toolbar',
		ui: 'light',
		title: 'Lista de Contatos',
		items: [
		    {
			xtype: 'button',
			action: 'contatosForm',
			text: 'Novo Contatos',
			hidden: true
		    },
		    {
			xtype: 'button',
			action: 'menuIniciar',
			//text: 'Menu Iniciar',
			iconMask: true,
			iconCls: 'home'
		    }
		]
	    }
	]
    }
});