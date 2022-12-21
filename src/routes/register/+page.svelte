<script lang="ts">
	import { publicClient } from "src/helper/server";


    let email = "";
    let password = "";

    async function register(){
        publicClient.auth.signUp({
            email
        })
    }
</script>