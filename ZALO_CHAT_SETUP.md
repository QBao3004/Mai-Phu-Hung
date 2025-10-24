# Zalo Chat Integration Guide

## 🎉 What's Been Implemented

I've integrated **two Zalo chat solutions** for your website:

### 1. ✅ Floating Zalo Button (Currently Active)
- **Location**: Bottom-right corner of every page
- **Features**:
  - Beautiful animated button with pulse effect
  - Hover tooltip showing "Chat với chúng tôi qua Zalo"
  - Opens Zalo chat in a popup window
  - Works immediately with your phone number: **079.886.8886**

### 2. 📱 Zalo Chat Widget (Optional - Requires Zalo OA)
- Full embedded chat experience
- Requires Zalo Official Account setup

---

## 🚀 Current Setup (Ready to Use!)

The **Floating Zalo Button** is already working and will:
1. Display a blue animated button at the bottom-right
2. When clicked, open Zalo chat with your phone number
3. Work on all devices (mobile & desktop)

**No additional setup needed!** It's using your phone number from the footer: **079.886.8886**

---

## 📞 How to Customize

### Change Phone Number
Edit `src/app/layout.tsx`:

```typescript
<ZaloFloatingButton 
  phoneNumber="YOUR_PHONE_NUMBER"
  zaloLink="https://zalo.me/YOUR_PHONE_NUMBER"
/>
```

### Change Button Position
Edit `src/components/ZaloFloatingButton.tsx`, line 23:
- `bottom-6 right-6` → Change position (e.g., `bottom-6 left-6` for left side)

### Customize Colors
In `ZaloFloatingButton.tsx`, change the gradient:
```typescript
from-[#0068FF] to-[#0180F7]  // Current blue gradient
```

---

## 🏢 Upgrade to Zalo Official Account (Advanced)

For advanced features like:
- ✅ Auto-replies
- ✅ Broadcast messages
- ✅ Customer management
- ✅ Analytics
- ✅ Integration with CRM

### Steps to Create Zalo OA:

1. **Visit Zalo OA Portal**
   - Go to: https://oa.zalo.me/
   - Click "Đăng ký tài khoản"

2. **Register Your Business**
   - Provide business information
   - Upload business registration documents
   - Wait for approval (1-3 business days)

3. **Get Your OA ID**
   - After approval, go to: https://oa.zalo.me/home
   - Find your OA ID in Settings

4. **Enable Chat Plugin**
   - In OA Dashboard → Settings → Chat Plugin
   - Enable the chat plugin
   - Copy the OA ID

5. **Update Your Website**
   Edit `src/app/layout.tsx`:
   ```typescript
   import ZaloChat from "@/components/ZaloChat";
   
   // Replace ZaloFloatingButton with:
   <ZaloChat 
     oaId="YOUR_OA_ID_HERE"
     welcomeMessage="Xin chào! Chúng tôi có thể giúp gì cho bạn?"
     autoExpand={false}
   />
   ```

---

## 🎨 Using Both (Floating Button + Widget)

You can use both simultaneously! In `src/app/layout.tsx`:

```typescript
{children}

{/* Floating Button for quick access */}
<ZaloFloatingButton 
  phoneNumber="0798868886"
  zaloLink="https://zalo.me/0798868886"
/>

{/* Official Widget for full chat experience */}
<ZaloChat 
  oaId="YOUR_OA_ID"
  welcomeMessage="Xin chào! Chúng tôi có thể giúp gì cho bạn?"
/>
```

---

## 🔧 Components Created

### 1. `src/components/ZaloFloatingButton.tsx`
- Animated floating button
- Customizable position, colors, and link
- No Zalo OA required

### 2. `src/components/ZaloChat.tsx`
- Full Zalo chat widget
- Requires Zalo Official Account
- Embedded chat experience

---

## 📱 Testing

1. **Desktop**: Click the blue Zalo button → Opens Zalo Web
2. **Mobile**: Click the button → Opens Zalo app (if installed) or Zalo Web

---

## 💡 Best Practices

1. **Response Time**: Try to respond within 5-10 minutes for best customer experience
2. **Business Hours**: Set up auto-reply for after-hours messages
3. **Zalo OA Benefits**: 
   - Professional appearance
   - Verified badge
   - Better analytics
   - Broadcasting capabilities

---

## 🆘 Troubleshooting

### Button not showing?
- Check if JavaScript is enabled
- Clear browser cache
- Check browser console for errors

### Zalo link not working?
- Verify phone number format: Remove spaces and special characters
- Format should be: `https://zalo.me/0798868886`

### Want to disable the button temporarily?
Comment out in `src/app/layout.tsx`:
```typescript
{/* <ZaloFloatingButton ... /> */}
```

---

## 📊 Next Steps

1. ✅ **Current**: Floating button is working with your phone number
2. 🔄 **Optional**: Create Zalo OA for professional features
3. 🚀 **Advanced**: Integrate Zalo OA API for custom chatbot logic

---

## 📞 Support

If you need help with:
- Zalo OA registration
- Custom chatbot features
- API integration

Let me know and I can help you implement more advanced features!

