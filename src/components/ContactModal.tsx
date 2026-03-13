import React, { useEffect, useRef, useState } from 'react';
import { X, Send, User, Mail, MessageSquare } from 'lucide-react';

interface Props {
    open: boolean;
    onClose: () => void;
}

const ContactModal: React.FC<Props> = ({ open, onClose }) => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);
    const overlayRef = useRef<HTMLDivElement>(null);

    // Close on Escape
    useEffect(() => {
        if (!open) return;
        const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [open, onClose]);

    // Lock body scroll
    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [open]);

    // Reset state when re-opened
    useEffect(() => {
        if (open) { setForm({ name: '', email: '', message: '' }); setSent(false); }
    }, [open]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
        const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
        window.location.href = `mailto:Pleasuren15@gmail.com?subject=${subject}&body=${body}`;
        setSent(true);
    };

    if (!open) return null;

    return (
        <div
            ref={overlayRef}
            onClick={e => { if (e.target === overlayRef.current) onClose(); }}
            style={{
                position: 'fixed', inset: 0, zIndex: 100,
                background: 'rgba(0,0,0,0.75)',
                backdropFilter: 'blur(6px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '1rem',
                animation: 'fadeIn 0.2s ease',
            }}
        >
            <div
                style={{
                    width: '100%', maxWidth: '480px',
                    background: 'rgba(10,10,10,0.95)',
                    border: '1px solid rgba(115,115,115,0.3)',
                    position: 'relative',
                    animation: 'slideUp 0.25s ease',
                }}
            >
                {/* Top accent line — red to blue */}
                <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                    background: 'linear-gradient(to right, #ef4444, #3b82f6, transparent)',
                }} />

                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 1.5rem 1rem' }}>
                    <div>
                        <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#fff', margin: 0 }}>Get In Touch</h2>
                        <p style={{ fontSize: '0.75rem', color: '#737373', marginTop: '2px' }}>I'll get back to you as soon as possible.</p>
                    </div>
                    <button
                        onClick={onClose}
                        aria-label="Close"
                        style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            width: '2rem', height: '2rem',
                            border: '1px solid rgba(115,115,115,0.3)',
                            background: 'transparent', color: '#737373', cursor: 'pointer',
                            transition: 'border-color 0.2s, color 0.2s',
                        }}
                        onMouseEnter={e => {
                            (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(239,68,68,0.5)';
                            (e.currentTarget as HTMLButtonElement).style.color = '#fff';
                        }}
                        onMouseLeave={e => {
                            (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(115,115,115,0.3)';
                            (e.currentTarget as HTMLButtonElement).style.color = '#737373';
                        }}
                    >
                        <X size={14} strokeWidth={2} />
                    </button>
                </div>

                {/* Divider */}
                <div style={{ height: '1px', background: 'rgba(115,115,115,0.2)', margin: '0 1.5rem' }} />

                {/* Form */}
                {sent ? (
                    <div style={{ padding: '2.5rem 1.5rem', textAlign: 'center' }}>
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                            width: '3rem', height: '3rem',
                            border: '1px solid rgba(59,130,246,0.3)',
                            background: 'rgba(59,130,246,0.08)',
                            marginBottom: '1rem',
                        }}>
                            <Send size={20} strokeWidth={1.5} color="#60a5fa" />
                        </div>
                        <p style={{ color: '#fff', fontWeight: 600, marginBottom: '0.5rem' }}>Email client opened!</p>
                        <p style={{ color: '#737373', fontSize: '0.8rem' }}>Complete sending in your email client. I'll respond shortly.</p>
                        <button
                            onClick={onClose}
                            style={{
                                marginTop: '1.5rem', padding: '0.5rem 1.5rem',
                                border: '1px solid rgba(239,68,68,0.4)',
                                background: 'transparent', color: '#f87171', fontSize: '0.8rem',
                                fontWeight: 600, cursor: 'pointer', letterSpacing: '0.05em',
                                transition: 'background 0.2s, color 0.2s',
                            }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLButtonElement).style.background = 'rgba(239,68,68,0.12)';
                                (e.currentTarget as HTMLButtonElement).style.color = '#fff';
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                                (e.currentTarget as HTMLButtonElement).style.color = '#f87171';
                            }}
                        >
                            CLOSE
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} style={{ padding: '1.25rem 1.5rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {/* Name */}
                        <div>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.7rem', fontWeight: 600, color: '#a3a3a3', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                                <User size={11} strokeWidth={2} /> NAME
                            </label>
                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                placeholder="Your full name"
                                style={inputStyle}
                                onFocus={e => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.5)'; e.currentTarget.style.outline = 'none'; }}
                                onBlur={e => { e.currentTarget.style.borderColor = 'rgba(115,115,115,0.3)'; }}
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.7rem', fontWeight: 600, color: '#a3a3a3', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                                <Mail size={11} strokeWidth={2} /> EMAIL
                            </label>
                            <input
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                placeholder="your@email.com"
                                style={inputStyle}
                                onFocus={e => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.5)'; e.currentTarget.style.outline = 'none'; }}
                                onBlur={e => { e.currentTarget.style.borderColor = 'rgba(115,115,115,0.3)'; }}
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.7rem', fontWeight: 600, color: '#a3a3a3', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                                <MessageSquare size={11} strokeWidth={2} /> MESSAGE
                            </label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                placeholder="What would you like to discuss?"
                                style={{ ...inputStyle, resize: 'none', lineHeight: '1.5' }}
                                onFocus={e => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.5)'; e.currentTarget.style.outline = 'none'; }}
                                onBlur={e => { e.currentTarget.style.borderColor = 'rgba(115,115,115,0.3)'; }}
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                                padding: '0.65rem 1rem',
                                background: 'linear-gradient(to right, #ef4444, #3b82f6)',
                                border: 'none', color: '#fff',
                                fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em',
                                cursor: 'pointer', transition: 'opacity 0.2s, transform 0.15s',
                            }}
                            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.opacity = '0.88'; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.opacity = '1'; }}
                        >
                            <Send size={13} strokeWidth={2} /> SEND MESSAGE
                        </button>
                    </form>
                )}
            </div>

            <style>{`
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                input::placeholder, textarea::placeholder { color: #525252; }
            `}</style>
        </div>
    );
};

const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.6rem 0.75rem',
    background: 'rgba(23,23,23,0.8)',
    border: '1px solid rgba(115,115,115,0.3)',
    color: '#e5e5e5',
    fontSize: '0.85rem',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
};

export default ContactModal;
