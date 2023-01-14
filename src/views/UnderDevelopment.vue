<template>
    <div class="container">
        <img src="@/assets/under_development.png" alt="">
        <h1>Under Development</h1>
        <div class="content">
            <p>Please contact <em>dysonlab.software@gmail.com</em> if you want to contribute as a developer. The
                repository of the
                project can be found <a target="_blank" href="https://github.com/dysonlab?tab=repositories">here</a>,
                and the specification document <a target="_blank" href="https://docs.google.com/document/d/17fEEuoh7yv-vcTBmORrTu9X0IpCL-nL7YZizq6MKfMg/edit?usp=sharing">here</a>.</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    padding: 10px;

    text-align: center;

    img {
        width: 50%;
        margin-left: auto;
        margin-right: auto;
    }

    h1 {
        font-weight: 400;
    }

    .content {
        max-width: 50%;
        margin-left: auto;
        margin-right: auto;

        p {
            padding: 30px;
            font-weight: 200;
            text-align: center;
        }

        a {
            color: blue;
        }
    }

    @media (max-width: 800px) {
        img {
            margin-top: 30px;
            width: 100%;
            margin-left: auto;
            margin-right: auto;
        }

        h1 {
            margin-top: 30px;
        }

        .content {
            max-width: 100%;
            margin-left: auto;
            margin-right: auto;
        }
    }
}
</style>