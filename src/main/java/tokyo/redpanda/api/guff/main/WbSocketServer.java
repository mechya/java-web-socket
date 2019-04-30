package tokyo.redpanda.api.guff.main;

import java.util.HashMap;
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;

@ServerEndpoint("/{userid}/{to}")
public class WbSocketServer {
	 
	 private static HashMap<String, Session> userSession= new  HashMap<String, Session>();
	//����ǉ����镔��
    @OnOpen
    public void onOpen(Session session,@PathParam("userid")String userId, @PathParam("to") String to) {
     	userSession.put(userId, session);
         System.out.println("New session opened: "+session.getId());
    }

    // ����ǉ����镔��
    @OnMessage
    public void onMessage(@PathParam("userid")String userId, @PathParam("to") String to,String pText) throws Exception {
    	Session session= userSession.get(to);
    	session.getAsyncRemote().sendText(pText);
    	
        System.out.println("WebSocket��M�F" + pText);
    }

    //����ǉ����镔��
    @OnError
    public void onError(Session session, @PathParam("userid")String pRoomDescriptor,Throwable t) {
    	userSession.remove(pRoomDescriptor);
    	System.err.println("Error on session "+session.getId());
    }

    //����ǉ����镔��
    @OnClose
    public void onClose(@PathParam("userid")String pRoomDescriptor, final Session session) {
    	 userSession.remove(pRoomDescriptor);
    	System.out.println("session closed: "+session.getId());
    }
	
}
