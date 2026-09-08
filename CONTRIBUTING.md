# Contributing to Razorpay AI Revenue Recovery

Thank you for your interest in contributing! We welcome contributions from everyone.

## 📋 Table of Contents
- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Reporting Issues](#reporting-issues)

---

## Code of Conduct

By participating in this project, you agree to:
- Be respectful and inclusive
- Provide constructive feedback
- Report inappropriate behavior to maintainers
- Follow best practices and coding standards

---

## How to Contribute

### 1. Fork the Repository
Click the **Fork** button on GitHub to create your own copy.

### 2. Clone Your Fork
```bash
git clone https://github.com/YOUR_USERNAME/razorpay-ai-revenue-recovery.git
cd razorpay-ai-revenue-recovery
```

### 3. Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
# or for bug fixes
git checkout -b fix/your-bug-fix-name
```

### 4. Make Your Changes
- Keep changes focused and atomic
- Update documentation as needed
- Add tests for new features

### 5. Test Your Changes
```bash
npm test
npm run lint
```

### 6. Commit Your Changes
Follow the commit guidelines below.

### 7. Push to Your Fork
```bash
git push origin feature/your-feature-name
```

### 8. Open a Pull Request
- Go to the original repository
- Click "New Pull Request"
- Select your branch and provide a clear description

---

## Development Setup

### Prerequisites
- Node.js v14+
- npm v6+
- Git

### Install Dependencies
```bash
npm install
```

### Set Up Environment
Create a `.env.local` file for development:
```env
PORT=3000
NODE_ENV=development
RAZORPAY_KEY_ID=test_key_id
RAZORPAY_KEY_SECRET=test_key_secret
```

### Start Development Server
```bash
npm run dev
# or
npm start
```

### Run Tests
```bash
npm test
```

### Linting
```bash
npm run lint
```

---

## Commit Guidelines

Use clear, descriptive commit messages following this format:

```
<type>: <subject>

<body>

<footer>
```

### Commit Types
- **feat:** New feature
- **fix:** Bug fix
- **docs:** Documentation changes
- **style:** Code style changes (formatting, semicolons, etc.)
- **refactor:** Code refactoring
- **perf:** Performance improvements
- **test:** Test additions or updates
- **chore:** Dependency updates, configuration changes

### Examples

```bash
git commit -m "Feat: Add email notification support for payment recovery"
git commit -m "Fix: Resolve webhook signature verification issue"
git commit -m "Docs: Update API documentation with examples"
git commit -m "Refactor: Simplify payment failure detection logic"
```

---

## Pull Request Process

### Before Submitting
- ✅ Update your fork with latest changes from main
- ✅ Test your changes thoroughly
- ✅ Update documentation
- ✅ Add/update tests
- ✅ Follow code style guidelines

### PR Description Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update

## Related Issues
Fixes #(issue number)

## Testing
Describe how to test these changes

## Checklist
- [ ] My code follows the code style
- [ ] I have tested these changes
- [ ] I have updated the documentation
- [ ] No breaking changes
```

### After Submitting
- Respond to review comments promptly
- Update your PR based on feedback
- Keep commits clean and organized

---

## Reporting Issues

### Security Issues
For security vulnerabilities, **do not** open a public issue. Email the maintainers directly.

### Bug Reports
Include:
- **Title:** Clear, descriptive
- **Description:** What you expected vs what happened
- **Steps to Reproduce:** Exact steps to recreate
- **Environment:** Node version, OS, npm version
- **Error Messages:** Full logs or screenshots
- **Attempts:** What you've already tried

### Feature Requests
Include:
- **Title:** Clear, descriptive
- **Description:** Why this feature is needed
- **Use Cases:** How it benefits users
- **Implementation Ideas:** If you have any

### Example Issue Template
```markdown
## Description
[Clear description of the issue]

## Steps to Reproduce
1. [First step]
2. [Second step]
3. [...]

## Expected Behavior
[What should happen]

## Actual Behavior
[What actually happens]

## Environment
- Node.js: [version]
- npm: [version]
- OS: [Windows/Mac/Linux]

## Error Messages
[Paste error logs here]
```

---

## Code Style Guidelines

### JavaScript/Node.js Standards
- Use 2-space indentation
- Use `const` and `let` (avoid `var`)
- Use semicolons
- Use arrow functions where appropriate
- Add JSDoc comments for functions

### Example
```javascript
/**
 * Recovers a failed payment with discount strategy
 * @param {Object} payment - Payment details
 * @param {string} payment.orderId - Order ID
 * @param {number} payment.amount - Payment amount
 * @returns {Promise<Object>} Recovery result
 */
const recoverPayment = async (payment) => {
  const discountAmount = Math.round(payment.amount * 0.95);
  return {
    success: true,
    discountedAmount: discountAmount
  };
};
```

---

## Review Process

- Maintainers will review within 2-3 days
- We may request changes or improvements
- Once approved, your PR will be merged
- Your contribution will be credited!

---

## Questions?

- **Issues:** [Create an issue](https://github.com/Mohitsingh9388/razorpay-ai-revenue-recovery/issues)
- **Email:** rajpootmohit1010@gmail.com
- **GitHub Discussions:** Coming soon!

---

## Recognition

Contributors will be acknowledged in:
- The README's Contributors section
- Release notes
- GitHub contributors page

Thank you for making this project better! 🙏

