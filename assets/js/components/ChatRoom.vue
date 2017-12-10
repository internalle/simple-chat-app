<template>
   <div id="chat-container" class="col-sm-3 col-sm-offset-4 frame">
        <ul id="messages">
            <li v-for="message in messages" style="width:100%">
                <div class="msj macro">
                <div class="avatar"><img class="img-circle" style="width:100%;" src="/src/test/" /></div>
                <div class="text text-l">
                    <p>{{message}}</p>
                    <p><small>data</small></p>
                    </div>
                </div>
            </li>
        </ul>
        <form action="" @submit.prevent="sendMessage">
            <div>
                <div class="msj-rta macro" style="margin:auto">
                    <div class="text text-r" style="background:whitesmoke !important">
                        <input class="mytext" placeholder="Type a message"/>
                    </div>
                </div>
            </div>
        </form>

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
