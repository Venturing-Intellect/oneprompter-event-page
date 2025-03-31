function copyTemplate(templateId) {
    const templateElement = document.getElementById(templateId);
    const templateText = templateElement.textContent;
    
    navigator.clipboard.writeText(templateText).then(() => {
        const button = document.querySelector(`button[onclick="copyTemplate('${templateId}')"]`);
        const successMessage = button.nextElementSibling;
        
        successMessage.classList.remove('hidden');
        
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy template: ', err);
    });
}

// Prevent details from closing when copy button is clicked
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.copy-button').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });
});