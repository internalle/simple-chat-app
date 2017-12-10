<template>
    <div class="chat-container">
        <ul id="messages">
            <li  v-for="message in messages">{{message}}</li>
        </ul>
        <form action="" @submit.prevent="sendMessage">
            <input id="m" autocomplete="off" /><button>Send</button>
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
