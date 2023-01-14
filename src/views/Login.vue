<template>
    <div class="view-container">
        <AppBar />
        <div class="login-container">
            <div class="login-form">
                <h1 class="title">Welcome back</h1>
                <p class="subtitle">login to manage your account</p>
                <div class="login-input">
                    <div class="login-input-email">
                        <p>Enter your email</p>
                        <input class="input" type="text" placeholder="Email *" v-model="email">
                    </div>
                    <div class="login-input-password">
                        <p>Enter your password</p>
                        <input class="input" type="password" placeholder="Password *" v-model="password">
                    </div>
                    <span class="register">dont have an account yet? <router-link :to="{ name: 'Register' }"><span
                                class="register-router"> sign up
                                here</span></router-link></span>
                    <button @click="onClickButtonLogin()" class="login">login</button>
                </div>
            </div>
        </div>
        <div class="login-footer">
            <hr class="solid">
            <div class="disclaimer">
                <p class="disclaimer-brand">© dysonlab software solution</p>
                <p class="disclaimer-content">When you visit or interact with our sites, services or tools, we or our
                    authorised service providers may use cookies for storing information to help provide you with a
                    better, faster and safer experience and for marketing purposes.</p>
            </div>
        </div>
    </div>
</template>

<script>
import AppBar from "@/components/AppBar.vue"
import { mapActions } from "vuex";

export default {
    name: "Login",
    components: { AppBar },
    data(){
        return{
            email: "",
            password: "",
        }
    },
    methods: {
        ...mapActions(["LOGIN"]),
        async onClickButtonLogin(){
            const payload = {
                email: this.email,
                password: this.password
            }
            await this.LOGIN(payload)
            this.$router.push({ path: '/dashboard' })
        }
    }
}
</script>

<style lang="scss" scoped>
.view-container {
    height: 100vh;
    display: flex;
    flex-direction: column;

    .login-container{
        height: 80vh;
        .login-form {
        background: var(--color-white);
        width: 40rem;
        padding: 2rem 3.5rem;
        box-shadow: 0.3rem 0.3rem 0.2rem rgba(0, 0, 0, 0.1);
        border-radius: 1rem;
        margin: auto;
        margin-top: 8rem;

        .title {
            font-weight: 600;
        }

        .subtitle {
            font-weight: 200;
            font-size: 0.8rem;
            color: #737478;
            margin-top: -0.3rem;
        }

        .login-input {
            display: flex;
            flex-direction: column;
            margin-top: 1rem;

            p {
                font-size: 0.8rem;
                font-weight: 300;
                margin-top: 1rem;
            }

            input {
                width: 100%;
                background-color: var(--color-white-background);
                color: var(--color-primary);
                padding: 14px 20px;
                margin: 8px 0;
                border-radius: 4px;
                border-color: var(--color-primary);
            }

            .register {
                font-size: 0.7rem;
                font-weight: 300;
                color: #737478;
                margin: 0.8rem auto;

                a {
                    font-weight: 600;
                    color: var(--color-primary);
                }
            }

            .link {
                margin: 0 auto;
            }

            .login {
                background-color: var(--color-primary);
                color: var(--color-white);
                margin: 0 auto;
                margin-top: 0.5rem;
                padding: 0.4rem;
                width: 5rem;
                border-radius: 0.2rem;
                cursor: pointer;
                transition: all 500ms ease;
                &:hover {
                    box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.1);
                }
            }
        }
    }}

    .login-footer {
        height: 10vh;
        hr.solid {
            border-top: 1px solid #eae1e2;
        }

        .disclaimer {
            display: flex;
            flex-direction: column;
            width: 35rem;
            margin: 0 auto;
            margin-top: 2rem;

            .disclaimer-brand {
                margin: 0 auto;
                font-size: 0.7rem;
            }

            .disclaimer-content {
                font-weight: 200;
                font-size: 0.6rem;
                color: #737478;
                margin: 0 auto;
                margin-top: 1rem;
                ;
                text-align: center;
            }
        }
    }
}

@media (max-width: 768px) {
    .view-container{
        height: 100vh;
        .login-container{
            height: 80vh;
            .login-form{
                width: 100%;
                background-color: var(--color-white-background);
                box-shadow: none;
                margin-top: 3rem;
            }
        }
        .login-footer{
            height: 20vh;
            .solid{
                display: none;
            }
            .disclaimer{
                width: 80%;
            }
        }
    }
}

@media (max-height: 800px) {
    .view-container{
        .login-footer{
            display: none;
        }
    }
}
</style>