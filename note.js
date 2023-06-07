

if (!credentials?.email || !credentials?.password) {
    throw new Error('Invalid credentials');
}
// Câu code trên kiểm tra xem email và mật khẩu có tồn tại trong đối tượng `credentials` hay không.
// Nếu không có, nó sẽ ném ra một ngoại lệ với thông báo lỗi`"Invalid credentials"`.

// Thông báo lỗi này nhằm cảnh báo rằng thông tin đăng nhập không hợp lệ và được sử dụng để bảo vệ 
// tài khoản khỏi các cuộc tấn công không mong muốn.
// Một thông báo lỗi như vậy sẽ giúp người dùng hiểu được lý do tại sao 
// tài khoản của họ không được cấp quyền truy cập.

// Vì vậy, bạn có thể giữ nguyên thông báo lỗi`"Invalid credentials"` 
// để đảm bảo tính bảo mật của tài khoản trong hệ thống của mình.

D
const user = await prisma.user.findUnique({
    where: {
        email: credentials.email
    }
});

if (!user || !user?.hashedPassword) {
    throw new Error('Invalid credentials')
}

// Câu code trên sử dụng phương thức `findUnique` của Prisma để tìm kiếm người dùng có 
// email trùng khớp với email được cung cấp trong `credentials`. 
// Nếu không có người dùng nào được tìm thấy hoặc mật khẩu của người dùng đó không tồn tại 
// (`hashedPassword === null`), một lỗi với thông báo `"Invalid credentials"` sẽ được ném ra.

// Đăng nhập github
// Tạo oAuth trong setting git ==> ClientID : f8d7ff578f51a1765fe9
// Generate a new client secret

// Đăng nhập google
// google developer console
// create project and choose enabled apis & serviecs ==>  OAuth consent screen ==> choose external(public)
// điền thông tin rồi tạo ==> credentials ==> create OAuth cline ID ==> web 
// Authorized redirect URIs ==> http://localhost:3000/api/auth/callback/google

// Thêm config để add image github trong next.config.js
images: {
    domains: [
        "avatars.githubusercontent.com",
        "lh3.googleusercontent.com",
        "res.cloudinary.com"
    ]
}

// Upload image lên cloudinary
// cần có clould name 
// tạo upload preset vs mode unsigned