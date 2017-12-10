<template>
    <div class="chat-container">
        <ul id="messages"></ul>
        <form action="">
            <input id="m" autocomplete="off" /><button>Send</button>
        </form>
    </div>
</template>

<script>
    export default {
        mounted() {
        	console.log('test');
            console.log('Component mounted.')
        }
    }
</script>
