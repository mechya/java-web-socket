/*風船を数える定数です。*/
var childNumber = 0;
/*Web Socketのサーバのエンド点リンク定数*/
var url = "";
/*Web Socketのオブジェクト定数*/
var ws;


/**
 *　メッセージ表示する領域を 一番した、スクロールする。
 * 
 * @returns void
 */
function scrollDown(){
	var objDiv = document.getElementById("outputarea");
	objDiv.scrollTop = objDiv.scrollHeight;
}
/**
 * 受信した、メッセージの風船を作成し
 * 、画面に張り付ける処理です。
 * @param recivedData 受信したデータ。
 */
function addRecivedBubbel(recivedData) {
	var parent = document.getElementById('outputarea');
	var newChild = '<div class="balloon6">';
	newChild += '<div class="faceicon">';
	newChild += '<img src="me.jpg">';
	newChild += '</div>';
	newChild += '<div class="chatting">';
	newChild += '<div class="says">';
	newChild += '<p id="recived-message">' + recivedData + '</p>';
	newChild += '</div>';
	newChild += '</div>';
	newChild += '</div>';

	parent.insertAdjacentHTML('beforeend', newChild);
	childNumber++;
}

/**
 * 画面に送信するメッセージの風船を作成し
 * 、最後のに張り付ける処理です。
 * 
 * @param sendData　送信するデータ。
 * 
 */
function addSendBubbel(sendData) {
	var parent = document.getElementById('outputarea');
	var newChild = '<div class="mycomment">';
	newChild += '	<p>';
	newChild += sendData;
	newChild += '</p>';
	newChild += '</div>';

	parent.insertAdjacentHTML('beforeend', newChild);
	childNumber++;
}

/**
 * チャットサーバへ送信する処理です。
 * 
 */
function sendMessageToServer(sendMsg) {
	ws.send(sendMsg);
}

/**
 * Sendボタン押下の場合。
 */
function onSendMessage() {
	//送信するメッセージを取得。
	var sendMsg = $("#txtarea-messages").val();
	//1文字以上のみ送信する。
	if (sendMsg.length > 0) {
		//サーバへ送信するメッセージの風船を作成する処理。
		addSendBubbel(sendMsg);
		//サーバへメッセージを送信する処理です。
		sendMessageToServer(sendMsg);
		scrollDown();
		$("#txtarea-messages").val("");
	} else {
		return false;
	}
	
}

/**
 * ユーザ名でサーバへ接続する処理
 * 
 * @returns void
 */
function connectMe(){
	var connectUsrid = "";
	var userid = $("#txt-connect-user").val();
	if(userid!=""){
		
		//WebSocketのオブジェクトを作成
		
	}
}
/**
 * 画面初期表示処理です。
 * 
 * @returns void
 */
$(function() {
	url = "ws://localhost:8080/java-web-socket/indexOne/indexTwo";
	//サーバへメッセージを送信する処理です。
	ws = new WebSocket(url);
	//サーバからメッセージ受信時
	ws.addEventListener('message', function (receive) {
		addRecivedBubbel(receive.data);
		scrollDown();
		
	});
	
	//送信するメッセージの文字数カウントする処理です。
	$('#txtarea-messages').keypress(function() {
		if (this.value.length > 150) {
			return false;
	}
		$("#remainingC").html(150 - this.value.length);
	});

});
