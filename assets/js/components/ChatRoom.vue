<template>
   <div id="chat-container">
       <div class="chat_window">
           <!-- TOP MENU -->
           <div class="top_menu">
               <div class="buttons">
                   <div class="button close"></div>
                   <div class="button minimize"></div>
                   <div class="button maximize"></div>
               </div>
               <div class="title">Chat</div>
           </div>
           <!-- TOP MENU -->

           <!-- MESSAGES -->
           <ul class="messages"></ul>
           <!-- MESSAGES -->

           <!-- WRITE MESSAGE -->
           <div class="bottom_wrapper clearfix">
               <div class="message_input_wrapper">
                   <input class="message_input" placeholder="Type your message here..." />
               </div>
               <div class="send_message">
                   <div class="icon"></div>
                   <div class="text">Send</div>
               </div>
           </div>
           <!-- WRITE MESSAGE -->
       </div>
       <!--<div class="message_template">-->
           <!--<li class="message">-->
               <!--<div class="avatar"></div>-->
               <!--<div class="text_wrapper">-->
                   <!--<div class="text"></div>-->
               <!--</div>-->
           <!--</li>-->
       <!--</div>-->
   </div>
</template>

<script>
    export default {

	    sockets: {
		    connect() {
			    // Fired when the socket connects.
			    this.isConnected = true;
		    },

		    disconnect() {
			    this.isConnected = false;
		    },

           'chat message': function(message){
                this.messages.push(message);
            }
	    },

    	data() {
    		return {
                'isConnected': false,
                'messages': [],
            }
        },
        mounted() {
            console.log('Component mounted.')
        },

        methods: {
            sendMessage() {
	            this.$socket.emit('chat message',' PING!');
            }
        }
    }
</script>
