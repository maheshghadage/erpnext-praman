

frappe.provide('frappe.ui.form');
frappe.ui.form.BankAccountQuickEntryForm = frappe.ui.form.QuickEntryForm.extend({
	init: function(doctype, after_insert) {
		this.skip_redirect_on_error = true;
		this._super(doctype, after_insert);
	},
	render_dialog: function() {
		this._super();
		this.init_post_render_dialog_operations();
	},

	init_post_render_dialog_operations: function() {
       		this.dialog.set_value('party',cur_frm.doc.party);
	}
	
});
