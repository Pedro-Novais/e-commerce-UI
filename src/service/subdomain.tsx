export const getSubdomain = () => {
    const hostname = window.location.hostname;
    const parts = hostname.split('.');
    if (parts.length >= 2) {
        const subdomain = parts[0];
        return `http://${subdomain}.example.local:5000`
    }

    return null;
}