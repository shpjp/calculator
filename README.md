# Basic Calculator App
\https://calculator-ten-eta-35.vercel.app/ access directly from here
A simple, modern calculator built with HTML, CSS, and JavaScript to demonstrate how calculators work.

## How It Works

### Core Concepts

1. **State Management**: The calculator maintains four key variables:
   - `currentOperand`: The number currently being entered
   - `previousOperand`: The number from the previous operation
   - `operation`: The mathematical operation to perform (+, -, ×, ÷, %)
   - `shouldResetScreen`: Boolean to determine when to clear the display

2. **Display System**: 
   - Shows the current number being entered
   - Shows the previous operation above (e.g., "5 +")
   - Updates in real-time as you type

3. **Mathematical Operations**:
   - **Addition (+)**: Adds two numbers
   - **Subtraction (-)**: Subtracts the second number from the first
   - **Multiplication (×)**: Multiplies two numbers
   - **Division (÷)**: Divides the first number by the second (with zero division protection)
   - **Modulo (%)**: Returns the remainder of division

### How Calculations Work

1. **Enter First Number**: Click number buttons to build your first number
2. **Choose Operation**: Click an operator button (+, -, ×, ÷, %)
3. **Enter Second Number**: The display clears and you enter the second number
4. **Get Result**: Click equals (=) to see the result
5. **Continue**: The result becomes your new first number for the next calculation

### Features

- **Modern UI**: Clean, responsive design with smooth animations
- **Keyboard Support**: Use your keyboard for all operations
- **Error Handling**: Prevents division by zero and invalid operations
- **Decimal Support**: Can handle decimal numbers
- **Clear Functions**: AC (All Clear) and DEL (Delete Last Digit)
- **Continuous Calculations**: Results can be used in subsequent operations

### Keyboard Shortcuts

- **Numbers**: 0-9 keys
- **Decimal**: . key
- **Operations**: +, -, *, /, % keys
- **Equals**: Enter or = key
- **Clear All**: Escape key
- **Delete Last**: Backspace key

## File Structure

```
calculator/
├── index.html      # Main HTML structure
├── styles.css      # CSS styling and layout
├── script.js       # JavaScript logic and functionality
└── README.md       # This file
```

# MIT LICENSE 2025 Copyright 

## How to Run

1. Open `index.html` in any modern web browser
2. Start calculating!

## Technical Implementation

### HTML Structure
- Uses semantic HTML with proper accessibility
- Grid-based button layout
- Separate display areas for current and previous operands

### CSS Features
- CSS Grid for button layout
- Flexbox for centering and display
- CSS transitions for smooth interactions
- Responsive design for mobile devices
- Modern glassmorphism design

### JavaScript Logic
- Event-driven programming
- State management with variables
- Input validation and error handling
- Real-time display updates
- Keyboard event handling

## Learning Points

This calculator demonstrates:
- **DOM Manipulation**: How to update HTML elements with JavaScript
- **Event Handling**: Responding to user clicks and keyboard input
- **State Management**: Keeping track of application state
- **Input Validation**: Preventing invalid operations
- **User Experience**: Providing immediate feedback and smooth interactions

The code is well-commented to help you understand each function's purpose and how the different parts work together to create a functional calculator. 
