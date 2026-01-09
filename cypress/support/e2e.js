import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('Tooltipster')) {
        return false; // Ignorar errores relacionados con Tooltipster
    }
    return true; // Permitir que otros errores se manejen normalmente
});