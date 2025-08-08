/**
 * EcoVillage Chatbot
 * Specialized chatbot for sustainable living community
 */

class EcoVillageChatbot {
    constructor(config = {}) {
        this.apiKey = config.apiKey || 'AIzaSyBAerdEMnzRjwcUfOAphUtoWCGQLQ119jo';
        this.organization = config.organization || 'EcoVillage of Loudoun County';
        this.container = config.container || '#ecovillage-chatbot-container';
        this.characters = this.getEcoVillageCharacters();
        this.currentCharacter = null;
        this.isOpen = false;
        this.messages = [];
        
        this.init();
    }

    getEcoVillageCharacters() {
        return [
            {
                id: 'community-leader-sarah',
                name: 'Sarah',
                role: 'Community Leader',
                photo: 'https://via.placeholder.com/100x100/4CAF50/FFFFFF?text=Sarah',
                label: 'Community Leader',
                system: "You are Sarah, a community leader at EcoVillage of Loudoun County. You're passionate about sustainable living, community building, and helping people understand what it means to live in an intentional community. You have 10 years of experience living in EcoVillage and love sharing stories about community events, sustainable practices, and the benefits of living close to nature. Keep answers friendly, informative, and focused on community life, sustainability, and the unique aspects of EcoVillage living. Mention specific community activities, green building practices, and how the community supports each other.",
                intro: "Hi there! I'm Sarah, a community leader here at EcoVillage. I love sharing about our sustainable living community and helping people understand what makes EcoVillage special. What would you like to know about our community?",
                color: '#4CAF50'
            },
            {
                id: 'sustainability-expert-mike',
                name: 'Mike',
                role: 'Sustainability Expert',
                photo: 'https://via.placeholder.com/100x100/45a049/FFFFFF?text=Mike',
                label: 'Sustainability Expert',
                system: "You are Mike, a sustainability expert and green building specialist at EcoVillage. You have 15 years of experience in sustainable construction, renewable energy, and environmental design. You're knowledgeable about solar panels, green building materials, water conservation, and creating energy-efficient homes. Keep answers technical but accessible, focused on practical sustainability solutions, and specific to EcoVillage's green building guidelines. Mention specific technologies, building techniques, and how sustainability is integrated into daily life.",
                intro: "Hello! I'm Mike, your sustainability expert. I specialize in green building, renewable energy, and sustainable living practices. What questions do you have about sustainable home design or EcoVillage's green building guidelines?",
                color: '#45a049'
            },
            {
                id: 'nature-guide-lisa',
                name: 'Lisa',
                role: 'Nature Guide',
                photo: 'https://via.placeholder.com/100x100/8BC34A/FFFFFF?text=Lisa',
                label: 'Nature Guide',
                system: "You are Lisa, a nature guide and wildlife specialist at EcoVillage. You're passionate about the natural environment, native plants, wildlife conservation, and helping people connect with nature. You have expertise in native plant identification, wildlife habitats, monarch waystations, and creating wildlife-friendly spaces. Keep answers focused on the natural environment, wildlife sightings, native plants, and how EcoVillage protects and enhances the natural world. Mention specific wildlife, plants, and conservation efforts.",
                intro: "Greetings! I'm Lisa, your nature guide. I love sharing about our wildlife sanctuary, native plants, and the beautiful natural environment here at EcoVillage. What would you like to know about our natural surroundings?",
                color: '#8BC34A'
            },
            {
                id: 'community-gardener-emma',
                name: 'Emma',
                role: 'Community Gardener',
                photo: 'https://via.placeholder.com/100x100/689F38/FFFFFF?text=Emma',
                label: 'Community Gardener',
                system: "You are Emma, a community gardener and organic farming specialist at EcoVillage. You manage the community garden, teach sustainable gardening practices, and help residents grow their own food. You have experience with organic gardening, permaculture, community food systems, and creating beautiful, productive gardens. Keep answers practical, educational, and focused on gardening, food production, and community agriculture. Mention specific gardening techniques, seasonal activities, and how the community garden brings people together.",
                intro: "Hello! I'm Emma, your community gardener. I love helping people grow their own food and create beautiful, sustainable gardens. Whether you're interested in our community garden or want to learn about organic gardening, I'm here to help!",
                color: '#689F38'
            }
        ];
    }

    init() {
        this.createChatbotUI();
        this.loadStyles();
        this.attachEventListeners();
    }

    createChatbotUI() {
        const chatbotHTML = `
            <div id="ecovillage-chatbot" class="ecovillage-chatbot">
                <div class="chatbot-launcher" id="chatbot-launcher">
                    <i class="fas fa-leaf"></i>
                    <span class="launcher-text">EcoVillage Help</span>
                </div>
                
                <div class="chatbot-window" id="chatbot-window">
                    <div class="chatbot-header">
                        <div class="header-content">
                            <h3>${this.organization} Assistant</h3>
                            <p>Get help with sustainable living</p>
                        </div>
                        <button class="close-btn" id="close-chatbot">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    
                    <div class="character-selector">
                        <h4>Choose your EcoVillage expert:</h4>
                        <div class="character-grid">
                            ${this.characters.map(character => `
                                <div class="character-card" data-character="${character.id}">
                                    <img src="${character.photo}" alt="${character.name}" class="character-photo">
                                    <div class="character-info">
                                        <h5>${character.name}</h5>
                                        <p>${character.role}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="chat-messages" id="chat-messages">
                        <div class="welcome-message">
                            <p>Welcome to EcoVillage! Choose an expert above to get started, or ask me anything about sustainable living and our community.</p>
                        </div>
                    </div>
                    
                    <div class="chat-input-container">
                        <div class="input-wrapper">
                            <input type="text" id="chat-input" placeholder="Type your message..." maxlength="500">
                            <button id="send-message" class="send-btn">
                                <i class="fas fa-paper-plane"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.querySelector(this.container).innerHTML = chatbotHTML;
    }

    loadStyles() {
        const styles = `
            <style>
                .ecovillage-chatbot {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    z-index: 1000;
                    font-family: 'Inter', sans-serif;
                }

                .chatbot-launcher {
                    width: 60px;
                    height: 60px;
                    background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
                    border-radius: 50%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    box-shadow: 0 4px 20px rgba(76, 175, 80, 0.3);
                    transition: all 0.3s ease;
                    color: white;
                }

                .chatbot-launcher:hover {
                    transform: scale(1.1);
                    box-shadow: 0 6px 25px rgba(76, 175, 80, 0.4);
                }

                .chatbot-launcher i {
                    font-size: 20px;
                    margin-bottom: 2px;
                }

                .launcher-text {
                    font-size: 8px;
                    font-weight: 600;
                    text-align: center;
                }

                .chatbot-window {
                    position: absolute;
                    bottom: 80px;
                    right: 0;
                    width: 350px;
                    height: 500px;
                    background: white;
                    border-radius: 20px;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
                    display: none;
                    flex-direction: column;
                    overflow: hidden;
                }

                .chatbot-window.open {
                    display: flex;
                }

                .chatbot-header {
                    background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
                    color: white;
                    padding: 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .header-content h3 {
                    margin: 0;
                    font-size: 18px;
                    font-weight: 600;
                }

                .header-content p {
                    margin: 5px 0 0 0;
                    font-size: 12px;
                    opacity: 0.9;
                }

                .close-btn {
                    background: none;
                    border: none;
                    color: white;
                    font-size: 18px;
                    cursor: pointer;
                    padding: 5px;
                    border-radius: 50%;
                    transition: background 0.3s ease;
                }

                .close-btn:hover {
                    background: rgba(255, 255, 255, 0.2);
                }

                .character-selector {
                    padding: 20px;
                    border-bottom: 1px solid #e0e0e0;
                }

                .character-selector h4 {
                    margin: 0 0 15px 0;
                    font-size: 14px;
                    color: #333;
                    text-align: center;
                }

                .character-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 10px;
                }

                .character-card {
                    background: #f8f9fa;
                    border-radius: 12px;
                    padding: 15px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    border: 2px solid transparent;
                }

                .character-card:hover {
                    background: #e8f5e8;
                    border-color: #4CAF50;
                }

                .character-card.selected {
                    background: #e8f5e8;
                    border-color: #4CAF50;
                }

                .character-photo {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    margin: 0 auto 10px;
                    display: block;
                }

                .character-info h5 {
                    margin: 0;
                    font-size: 12px;
                    font-weight: 600;
                    text-align: center;
                    color: #333;
                }

                .character-info p {
                    margin: 5px 0 0 0;
                    font-size: 10px;
                    text-align: center;
                    color: #666;
                }

                .chat-messages {
                    flex: 1;
                    padding: 20px;
                    overflow-y: auto;
                    background: #f8f9fa;
                }

                .welcome-message {
                    background: white;
                    padding: 15px;
                    border-radius: 12px;
                    margin-bottom: 15px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                }

                .welcome-message p {
                    margin: 0;
                    font-size: 14px;
                    color: #333;
                    line-height: 1.4;
                }

                .message {
                    margin-bottom: 15px;
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                }

                .message.user {
                    flex-direction: row-reverse;
                }

                .message-avatar {
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    flex-shrink: 0;
                }

                .message-content {
                    background: white;
                    padding: 12px 16px;
                    border-radius: 18px;
                    max-width: 70%;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                }

                .message.user .message-content {
                    background: #4CAF50;
                    color: white;
                }

                .message-content p {
                    margin: 0;
                    font-size: 14px;
                    line-height: 1.4;
                }

                .typing-indicator {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    padding: 12px 16px;
                    background: white;
                    border-radius: 18px;
                    max-width: 70%;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                }

                .typing-dot {
                    width: 8px;
                    height: 8px;
                    background: #4CAF50;
                    border-radius: 50%;
                    animation: typing 1.4s infinite ease-in-out;
                }

                .typing-dot:nth-child(1) { animation-delay: -0.32s; }
                .typing-dot:nth-child(2) { animation-delay: -0.16s; }

                @keyframes typing {
                    0%, 80%, 100% { transform: scale(0); }
                    40% { transform: scale(1); }
                }

                .chat-input-container {
                    padding: 20px;
                    border-top: 1px solid #e0e0e0;
                    background: white;
                }

                .input-wrapper {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    background: #f8f9fa;
                    border-radius: 25px;
                    padding: 5px;
                }

                #chat-input {
                    flex: 1;
                    border: none;
                    background: none;
                    padding: 12px 15px;
                    font-size: 14px;
                    outline: none;
                }

                .send-btn {
                    background: #4CAF50;
                    color: white;
                    border: none;
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }

                .send-btn:hover {
                    background: #45a049;
                    transform: scale(1.1);
                }

                .send-btn:disabled {
                    background: #ccc;
                    cursor: not-allowed;
                    transform: none;
                }

                @media (max-width: 480px) {
                    .chatbot-window {
                        width: 320px;
                        height: 450px;
                        bottom: 70px;
                        right: 10px;
                    }

                    .character-grid {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
        `;
        
        document.head.insertAdjacentHTML('beforeend', styles);
    }

    attachEventListeners() {
        const launcher = document.getElementById('chatbot-launcher');
        const closeBtn = document.getElementById('close-chatbot');
        const sendBtn = document.getElementById('send-message');
        const input = document.getElementById('chat-input');
        const characterCards = document.querySelectorAll('.character-card');

        launcher.addEventListener('click', () => this.toggleChatbot());
        closeBtn.addEventListener('click', () => this.toggleChatbot());

        sendBtn.addEventListener('click', () => this.sendMessage());
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });

        characterCards.forEach(card => {
            card.addEventListener('click', () => {
                this.selectCharacter(card.dataset.character);
            });
        });
    }

    toggleChatbot() {
        const window = document.getElementById('chatbot-window');
        this.isOpen = !this.isOpen;
        
        if (this.isOpen) {
            window.classList.add('open');
        } else {
            window.classList.remove('open');
        }
    }

    selectCharacter(characterId) {
        const character = this.characters.find(c => c.id === characterId);
        if (!character) return;

        this.currentCharacter = character;
        
        // Update UI
        document.querySelectorAll('.character-card').forEach(card => {
            card.classList.remove('selected');
        });
        document.querySelector(`[data-character="${characterId}"]`).classList.add('selected');

        // Add character intro message
        this.addMessage(character.intro, character, false);
    }

    addMessage(content, character = null, isUser = false) {
        const messagesContainer = document.getElementById('chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user' : ''}`;

        const avatar = character ? character.photo : 'https://via.placeholder.com/35x35/4CAF50/FFFFFF?text=EV';
        
        messageDiv.innerHTML = `
            <img src="${avatar}" alt="${character ? character.name : 'EcoVillage'}" class="message-avatar">
            <div class="message-content">
                <p>${content}</p>
            </div>
        `;

        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    async sendMessage() {
        const input = document.getElementById('chat-input');
        const sendBtn = document.getElementById('send-message');
        const message = input.value.trim();

        if (!message) return;

        // Add user message
        this.addMessage(message, null, true);
        input.value = '';

        // Disable input and button
        input.disabled = true;
        sendBtn.disabled = true;

        // Show typing indicator
        this.showTypingIndicator();

        try {
            const response = await this.sendMessageToAI(message);
            this.hideTypingIndicator();
            this.addMessage(response, this.currentCharacter, false);
        } catch (error) {
            this.hideTypingIndicator();
            this.addMessage("I'm sorry, I'm having trouble connecting right now. Please try again later.", this.currentCharacter, false);
        }

        // Re-enable input and button
        input.disabled = false;
        sendBtn.disabled = false;
        input.focus();
    }

    showTypingIndicator() {
        const messagesContainer = document.getElementById('chat-messages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message typing-indicator';
        typingDiv.id = 'typing-indicator';
        
        const avatar = this.currentCharacter ? this.currentCharacter.photo : 'https://via.placeholder.com/35x35/4CAF50/FFFFFF?text=EV';
        
        typingDiv.innerHTML = `
            <img src="${avatar}" alt="Typing" class="message-avatar">
            <div class="typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        `;

        messagesContainer.appendChild(typingDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    hideTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    async sendMessageToAI(message) {
        const character = this.currentCharacter;
        const systemPrompt = character ? character.system : "You are a helpful assistant for EcoVillage of Loudoun County, a sustainable living community. You help people learn about sustainable living, community building, and the unique aspects of EcoVillage life. Keep answers friendly, informative, and focused on sustainability and community.";

        const prompt = `${systemPrompt}\n\nUser: ${message}\n\nAssistant:`;

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${this.apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }],
                generationConfig: {
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.95,
                    maxOutputTokens: 1024,
                }
            })
        });

        if (!response.ok) {
            throw new Error('Failed to get response from AI');
        }

        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    }
}

// Initialize the chatbot when the page loads
document.addEventListener('DOMContentLoaded', function() {
    new EcoVillageChatbot({
        apiKey: 'AIzaSyBAerdEMnzRjwcUfOAphUtoWCGQLQ119jo',
        organization: 'EcoVillage of Loudoun County',
        container: '#ecovillage-chatbot-container'
    });
}); 