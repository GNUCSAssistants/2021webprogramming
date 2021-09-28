const id = "assistant0603";
const password = "mypassword123";

if (id === "assistant0603") {
    if (password === "mypassword123") {
        console.log(`
            아이디: ${id}
            환영합니다.
        `);
    } else {
        console.log("로그인 실패!");
    }
} else {
    console.log("로그인 실패!");
}