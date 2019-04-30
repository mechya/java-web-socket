package tokyo.redpanda.api.guff.main;

public class JasonMessage {
	/****/
	private String message;
	/****/
	private String form;
	/**送信先**/
	private String to;
	
	/****/
	public JasonMessage(){
		
	}
	
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getForm() {
		return form;
	}
	public void setForm(String form) {
		this.form = form;
	}
	public String getTo() {
		return to;
	}
	public void setTo(String to) {
		this.to = to;
	}
}
