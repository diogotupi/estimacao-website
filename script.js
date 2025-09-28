// PIX code to be copied
const PIX_CODE = '08996430000117';

// Function to copy PIX code to clipboard
async function copyPixCode() {
    try {
        // Try to use the modern Clipboard API
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(PIX_CODE);
            showSuccessMessage();
        } else {
            // Fallback for older browsers
            fallbackCopyTextToClipboard(PIX_CODE);
        }
    } catch (err) {
        console.error('Failed to copy: ', err);
        // Try fallback method
        fallbackCopyTextToClipboard(PIX_CODE);
    }
}

// Fallback method for copying text to clipboard
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showSuccessMessage();
        } else {
            showErrorMessage();
        }
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
        showErrorMessage();
    }
    
    document.body.removeChild(textArea);
}

// Show success message
function showSuccessMessage() {
    // Get all buttons
    const buttons = document.querySelectorAll('.pix-button');
    
    // Add success class to all buttons
    buttons.forEach(button => {
        button.classList.add('success');
        const originalText = button.textContent;
        button.textContent = '✓ Código copiado!';
        
        // Reset button after 2 seconds
        setTimeout(() => {
            button.classList.remove('success');
            button.textContent = originalText;
        }, 2000);
    });
    
    // Optional: Show a more prominent notification
    showNotification('Código PIX copiado com sucesso!', 'success');
}

// Show error message
function showErrorMessage() {
    const buttons = document.querySelectorAll('.pix-button');
    
    buttons.forEach(button => {
        const originalText = button.textContent;
        button.textContent = '❌ Erro ao copiar';
        button.style.background = 'linear-gradient(45deg, #f44336, #d32f2f)';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = 'linear-gradient(45deg, #25D366, #128C7E)';
        }, 2000);
    });
    
    showNotification('Erro ao copiar o código. Tente novamente.', 'error');
}

// Show notification
function showNotification(message, type) {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        font-weight: bold;
        animation: slideIn 0.3s ease;
    `;
    
    // Add animation keyframes
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideIn 0.3s ease reverse';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }
    }, 3000);
}

// Add keyboard support (Enter key)
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && event.target.classList.contains('pix-button')) {
        copyPixCode();
    }
});

// Add touch support for mobile devices
document.addEventListener('touchstart', function(event) {
    if (event.target.classList.contains('pix-button')) {
        event.target.style.transform = 'scale(0.95)';
    }
});

document.addEventListener('touchend', function(event) {
    if (event.target.classList.contains('pix-button')) {
        event.target.style.transform = '';
    }
});
