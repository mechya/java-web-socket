package tokyo.redpanda.api.guff.main;
import java.util.HashMap;

import javax.enterprise.context.ApplicationScoped;
import javax.websocket.Session;

@ApplicationScoped
public class ChatSessionManager {
	  
		private final HashMap<String,Session> sessions = new HashMap<String, Session>();
	 
	    public void addSession(final String userId, final Session pSession) {
	    	sessions.put(userId, pSession);
	      
	    }
	 
	    public Session getSessions(final String userId) {
	        return this.sessions.get(userId);
	    }
	 
	    public void removeSession(final String userId, final Session pSession) {
	        this.sessions.remove(userId);
	    }
}
