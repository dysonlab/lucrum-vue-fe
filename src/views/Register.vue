<template>
    <div class="view-container">
        <AppBar />
        <div class="register-container">
            <div class="register-form">
                <h1 class="title">Create account</h1>
                <p class="subtitle">Fill out the form to get started</p>
                <div class="register-input">
                    <div class="reigster-input-name">
                        <p>Enter your first name</p>
                        <input type="text" class="input" placeholder="First Name *" v-model="firstName">
                        <p v-if="errorFirstName" class="error">first name is required</p>
                    </div>
                    <div class="reigster-input-name">
                        <p>Enter your last name</p>
                        <input type="text" class="input" placeholder="Lasst Name *" v-model="lastname">
                        <p v-if="errorLastName" class="error">last name is required</p>
                    </div>
                    <div class="reigster-input-email">
                        <p>Enter your email</p>
                        <input type="text" class="input" placeholder="Email *" v-model="email">
                        <p v-if="errorEmail" class="error">email name is required</p>
                    </div>
                    <div class="reigster-input-email">
                        <p>Enter your phone number</p>
                        <input type="text" class="input" placeholder="Email *" v-model="phone">
                        <p v-if="errorPhone" class="error">phone number is required</p>
                    </div>
                    <div class="reigster-input-password">
                        <p>Enter your password</p>
                        <input type="password" class="input" placeholder="Password *" v-model="password">
                        <p v-if="errorPasswordRequired" class="error">password is required</p>
                        <p v-if="errorPasswordTooShort" class="error">confirm password is too short, at least 8 characters are allowed</p>
                    </div>
                    <div class="reigster-input-confrim-password">
                        <p>Confrim password</p>
                        <input type="password" class="input" placeholder="Confirm password *" v-model="confirmPassword">
                        <p v-if="errorConfirmPasswordRequired" class="error">confirm password is required</p>
                        <p v-if="errorConfirmPasswordTooShort" class="error">confirm password is too short, at least 8 characters are allowed</p>
                    </div>
                    <button @click="onClickButtonRegister()" class="register">register</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppBar from "@/components/AppBar.vue";
// import { mapActions } from "vuex";
// import { toTitleCase } from "@/utils/string"

export default {
    name: "Register",
    components: { AppBar },
    data(){
        return{
            firstName: "",
            lastname: "",
            email: "",
            phone: "+62",
            password: "",
            confirmPassword: "",
            errorFirstName: false,
            errorLastName: false,
            errorEmail: false,
            errorPhone: false,
            errorPasswordRequired: false,
            errorPasswordTooShort: false,
            errorConfirmPasswordRequired: false,
            errorConfirmPasswordTooShort: false,
        }
    },
    methods:{
        validatePayload(){
            if(this.firstName === ""){
                this.errorFirstName = true
            }
            if(this.lastname === ""){
                this.errorLastName = true
            }
            if(this.email === ""){
                this.errorEmail = true
            }
            if(this.phone.length < 10){
                this.errorPhone = true
            }
            if(this.password === ""){
                this.errorPasswordRequired = true
            }
            if(this.password.length < 8 && this.password !== ""){
                this.errorPasswordTooShort = true
            }
            if(this.confirmPassword === ""){
                this.errorConfirmPasswordRequired = true
            }
            if(this.confirmPassword.length < 8 && this.confirmPassword !== ""){
                this.errorConfirmPasswordTooShort = true
            }
        },
        clearFormError(){
            this.errorFirstName = false
            this.errorLastName = false
            this.errorEmail = false
            this.errorPhone = false
            this.errorPasswordRequired =  false
            this.errorPasswordTooShort =  false
            this.errorConfirmPasswordRequired = false
            this.errorConfirmPasswordTooShort = false
        },
        onClickButtonRegister(){
            this.clearFormError()
            this.validatePayload()
        }
    }
}
</script>

<style lang="scss">
.view-container {
    height: 100%;
    display: flex;
    flex-direction: column;

    .register-container{

        .register-form {
            background: var(--color-white);
            width: 40rem;
            margin: 0 auto;
            margin-top: 4rem;
            margin-bottom: 4rem;
            padding: 2rem 3.5rem;
            box-shadow: 0.3rem 0.3rem 0.2rem rgba(0, 0, 0, 0.1);
            border-radius: 1rem;

            .title {
                font-weight: 600;
            }

            .subtitle {
                font-weight: 200;
                font-size: 0.8rem;
                color: #737478;
                margin-top: -0.3rem;
            }

            .register-input {
                display: flex;
                flex-direction: column;
                margin-top: 1rem;
                margin-bottom: 1rem;

                p {
                    font-size: 0.8rem;
                    font-weight: 300;
                    margin-top: 1rem;
                }

                input {
                    width: 100%;
                    color: var(--color-primary);
                    background-color: var(--color-white-background);
                    padding: 14px 20px;
                    margin: 8px 0;
                    border-radius: 4px;
                    border-color: var(--color-primary);
                    cursor: pointer;
                }

                .register {
                    background-color: var(--color-primary);
                    color: var(--color-white);
                    margin: 0 auto;
                    margin-top: 2rem;
                    padding: 0.4rem;
                    width: 5rem;
                    border-radius: 0.2rem;
                    cursor: pointer;
                    transition: all 500ms ease;
                    &:hover {
                        box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.1);
                    }
                }

                .error{
                    color: red;
                    margin-top: -2px;
                    font-size: 0.6rem;
                }
            }
        }
    }
}

@media (max-width: 768px) {
    .view-container{
        .register-container{
            .register-form{
                width: 100%;
                background-color: var(--color-white-background);
                box-shadow: none;
                margin-top: 1rem;
            }
        }
    }
}
</style>