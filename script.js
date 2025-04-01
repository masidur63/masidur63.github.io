// সাইনআপ ফর্মের সাবমিশন হ্যান্ডলার
document.getElementById("signup-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // ফর্ম ডেটা সংগ্রহ করুন
  const name = event.target.name.value;
  const email = event.target.email.value;

  // এখানে আপনি AJAX (যেমন fetch API) ব্যবহার করে ব্যাকএন্ডে ডেটা পাঠাতে পারেন
  // উদাহরণ:
  // fetch('https://your-backend-api.com/signup', {
  //   method: 'POST',
  //   headers: {'Content-Type': 'application/json'},
  //   body: JSON.stringify({ name, email })
  // })
  // .then(response => response.json())
  // .then(data => console.log(data))
  // .catch(error => console.error(error));

  // ফর্ম সাবমিশনের পর একটি বার্তা দেখানো
  const formMessage = document.getElementById("form-message");
  formMessage.style.color = "green";
  formMessage.textContent = "ধন্যবাদ, " + name + "! আপনার তথ্য সফলভাবে জমা হয়েছে।";

  // ফর্ম রিসেট করুন
  event.target.reset();
});
