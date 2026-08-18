// =========================================================================
// 1. DATA MODELS & STATIC LISTS
// =========================================================================

// Food Menu Dataset
// Food Menu Dataset
const FOOD_MENU = [
    // Breakfast items (6:00 AM – 11:30 AM)
    { id: 'b1', name: 'Idli', category: 'main', price: 30, desc: 'Two soft steamed rice cakes served with hot sambar and coconut chutney.', isVeg: true, image: 'images/idli.jpg', timings: ['breakfast', 'dinner'] },
    { id: 'b2', name: 'Dosa', category: 'main', price: 40, desc: 'Crispy thin rice crepe cooked on iron griddle, served with chutneys.', isVeg: true, image: 'images/dosa.jpg', timings: ['breakfast', 'dinner'] },
    { id: 'b3', name: 'Pongal', category: 'main', price: 45, desc: 'Traditional ghee-seasoned rice and lentil porridge with cashews.', isVeg: true, image: 'images/pongal.jpg', timings: ['breakfast'] },
    { id: 'b4', name: 'Poori', category: 'main', price: 40, desc: 'Two fluffy deep-fried wheat breads served with spiced potato masala.', isVeg: true, image: 'images/poori.jpg', timings: ['breakfast'] },
    { id: 'b5', name: 'Upma', category: 'main', price: 35, desc: 'Roasted semolina porridge tempered with mustard seeds and curry leaves.', isVeg: true, image: 'images/upma.jpg', timings: ['breakfast'] },
    { id: 'b6', name: 'Bread & Jam', category: 'main', price: 30, desc: 'Toasted sliced bread spread with sweet mixed fruit jam.', isVeg: true, image: 'images/bread_jam.jpg', timings: ['breakfast'] },

    // Lunch items (11:30 AM – 3:30 PM)
    { id: 'l1', name: 'Veg Meals', category: 'main', price: 70, desc: 'Traditional South Indian thali with rice, sambar, rasam, kootu, and appalam.', isVeg: true, image: 'images/veg_meals.jpg', timings: ['lunch', 'dinner'] },
    { id: 'l2', name: 'Chicken Biryani', category: 'main', price: 120, desc: 'Seeraga samba rice cooked with tender chicken pieces, mint, and boiled egg.', isVeg: false, image: 'images/chicken_biryani.jpg', timings: ['lunch', 'dinner'] },
    { id: 'l3', name: 'Veg Biryani', category: 'main', price: 100, desc: 'Aromatic basmati rice layered with garden fresh vegetables and spices.', isVeg: true, image: 'images/veg_biryani.jpg', timings: ['lunch', 'dinner'] },
    { id: 'l4', name: 'Chicken Rice', category: 'main', price: 110, desc: 'Wok-tossed basmati rice with tender shredded chicken, egg, and green onion.', isVeg: false, image: 'images/chicken_rice.jpg', timings: ['lunch', 'dinner'] },
    { id: 'l5', name: 'Fried Rice', category: 'main', price: 90, desc: 'Classic stir-fried rice loaded with crunchy finely chopped vegetables.', isVeg: true, image: 'images/fried_rice.jpg', timings: ['lunch', 'dinner'] },
    { id: 'l6', name: 'Sambar Rice', category: 'main', price: 50, desc: 'Steamed rice cooked together with lentil sambar, ghee, and cumin.', isVeg: true, image: 'images/veg_meals.jpg', timings: ['lunch'] },
    { id: 'l7', name: 'Egg Biryani', category: 'main', price: 110, desc: 'Fragrant biryani rice cooked with spices and boiled eggs.', isVeg: false, image: 'images/egg_biryani.jpg', timings: ['lunch', 'dinner'] },
    { id: 'l8', name: 'Egg Omelette', category: 'secondary', price: 30, desc: 'Double egg fluffy omelette with chopped onions, green chilies, and pepper.', isVeg: false, image: 'images/egg_omelette.jpg', timings: ['breakfast', 'lunch', 'dinner', 'snacks'] },
    { id: 'l9', name: 'Chicken Gravy', category: 'secondary', price: 90, desc: 'Rich chicken curry cooked in thick traditional spicy gravy.', isVeg: false, image: 'images/chicken_gravy.jpg', timings: ['lunch', 'dinner'] },
    { id: 'l11', name: 'Non-Veg Meals', category: 'main', price: 130, desc: 'South Indian non-veg thali with chicken curry, fish gravy, rasam, and rice.', isVeg: false, image: 'images/nonveg_meals.jpg', timings: ['lunch', 'dinner'] },
    { id: 'l10', name: 'Chicken Curry', category: 'secondary', price: 80, desc: 'Rich and fiery chicken gravy simmered in house ground spices.', isVeg: false, image: 'images/chicken_curry.jpg', timings: ['lunch', 'dinner'] },
    { id: 'l12', name: 'Chicken 65', category: 'secondary', price: 100, desc: 'Deep-fried crispy marinated chicken cubes tossed in curry leaves.', isVeg: false, image: 'images/chicken_65.jpg', timings: ['lunch', 'dinner', 'snacks'] },
    { id: 'l13', name: 'Egg Curry', category: 'secondary', price: 50, desc: 'Spiced curry gravy housing two halved boiled eggs.', isVeg: false, image: 'images/egg_curry.jpg', timings: ['dinner'] },

    // Dinner items (6:30 PM – 11:00 PM)
    { id: 'd1', name: 'Parotta', category: 'main', price: 15, desc: 'Layered flakey flatbread served with hot chicken/veg salna.', isVeg: true, image: 'images/parotta.jpg', timings: ['dinner'] },
    { id: 'd2', name: 'Chapati', category: 'main', price: 12, desc: 'Soft whole-wheat flatbread grilled on dry iron tawa.', isVeg: true, image: 'images/chapati.jpg', timings: ['breakfast', 'lunch', 'dinner'] },
    { id: 'd3', name: 'Paneer Curry', category: 'secondary', price: 90, desc: 'Fresh paneer cubes cooked in rich tomato onion butter gravy.', isVeg: true, image: 'images/paneer_curry.jpg', timings: ['dinner'] },
    { id: 'd4', name: 'Gobi Manchurian', category: 'secondary', price: 80, desc: 'Crispy fried cauliflower florets tossed in sweet and tangy soy chili sauce.', isVeg: true, image: 'images/gobi_manchurian.jpg', timings: ['dinner'] },

    // Snacks (3:30 PM – 6:30 PM)
    { id: 's1', name: 'Samosa', category: 'snacks', price: 15, desc: 'Crispy triangular pastry stuffed with spicy potato green peas filling.', isVeg: true, image: 'images/samosa.jpg', timings: ['snacks'] },
    { id: 's2', name: 'Bajji', category: 'snacks', price: 25, desc: 'Gram flour battered deep-fried banana pepper or potato slices.', isVeg: true, image: 'images/bajji.jpg', timings: ['snacks'] },
    { id: 's4', name: 'Vada', category: 'snacks', price: 12, desc: 'Deep-fried savory crispy lentil doughnut with onion and green chili.', isVeg: true, image: 'images/vada.jpg', timings: ['breakfast', 'snacks'] },
    { id: 's5', name: 'Puffs', category: 'snacks', price: 20, desc: 'Golden baked flaky puff pastry with spiced egg or onion filling.', isVeg: true, image: 'images/puffs.jpg', timings: ['snacks'] },
    { id: 's6', name: 'Sandwich', category: 'snacks', price: 40, desc: 'Toasted bread filled with cucumber, tomato, mint chutney, and butter.', isVeg: true, image: 'images/sandwich.jpg', timings: ['snacks'] },
    { id: 's7', name: 'French Fries', category: 'snacks', price: 60, desc: 'Crispy golden fried potato fingers tossed in iodized salt.', isVeg: true, image: 'images/french_fries.jpg', timings: ['snacks'] },
    { id: 's8', name: 'Biscuits', category: 'snacks', price: 10, desc: 'Assorted crispy sweet or salt baked biscuits pack.', isVeg: true, image: 'images/biscuits.jpg', timings: ['snacks'] },
    { id: 's9', name: 'Chips', category: 'snacks', price: 20, desc: 'Freshly fried hot salted potato wafers.', isVeg: true, image: 'images/chips.jpg', timings: ['snacks'] },

    // Drinks & Beverages (Available throughout or session-specific)
    { id: 'dr1', name: 'Water Bottle', category: 'drinks', price: 20, desc: 'Chilled packaged mineral drinking water 1 Litre.', isVeg: true, image: 'images/water_bottle.jpg', timings: ['breakfast', 'lunch', 'snacks', 'dinner', 'drinks'] },
    { id: 'dr2', name: 'Tea', category: 'drinks', price: 15, desc: 'Hot brewed milk chai flavored with freshly ground cardamom.', isVeg: true, image: 'images/tea.jpg', timings: ['breakfast', 'snacks', 'dinner', 'drinks'] },
    { id: 'dr3', name: 'Coffee', category: 'drinks', price: 20, desc: 'Frothy hot filter coffee brewed from premium beans.', isVeg: true, image: 'images/coffee.jpg', timings: ['breakfast', 'snacks', 'dinner', 'drinks'] },
    { id: 'dr5', name: 'Fresh Lime', category: 'drinks', price: 25, desc: 'Freshly squeezed sweet or salty lemon juice with water.', isVeg: true, image: 'images/fresh_lime.jpg', timings: ['lunch', 'snacks', 'dinner', 'drinks'] },
    { id: 'dr7', name: 'Soft Drink', category: 'drinks', price: 30, desc: 'Chilled carbonated soft drink can.', isVeg: true, image: 'images/soft_drink.jpg', timings: ['lunch', 'snacks', 'dinner', 'drinks'] },
    { id: 'dr8', name: 'Milkshake', category: 'drinks', price: 50, desc: 'Rich and creamy chilled thick milkshake.', isVeg: true, image: 'images/milkshake.jpg', timings: ['snacks', 'dinner', 'drinks'] },
    { id: 'dr9', name: 'Ice Cream', category: 'drinks', price: 40, desc: 'Rich single scoop ice cream.', isVeg: true, image: 'images/ice_cream.jpg', timings: ['lunch', 'dinner', 'drinks'] },
    { id: 'dr10', name: 'Gulab Jamun', category: 'drinks', price: 30, desc: 'Two hot golden fried dough balls in sugar syrup.', isVeg: true, image: 'images/gulab_jamun.jpg', timings: ['lunch', 'dinner', 'drinks'] },
    { id: 'dr11', name: 'Fruit Salad', category: 'drinks', price: 50, desc: 'Fresh cut fruits served with custard sauce.', isVeg: true, image: 'images/fruit_salad.jpg', timings: ['lunch', 'snacks', 'dinner', 'drinks'] },
    { id: 'dr12', name: 'Brownie', category: 'drinks', price: 60, desc: 'Warm delicious chocolate fudge brownie.', isVeg: true, image: 'images/brownie.jpg', timings: ['dinner', 'drinks'] }
];

// Default Table configurations (10 tables)
const DEFAULT_TABLES = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    status: 'available', // available, ordering, preparing, ready, delivered
    currentOrderId: null,
    customerName: null,
    numPeople: null,
    items: [], // [{ name, price, qty }] (Cart items for active session)
    itemsCount: 0,
    totalAmount: 0,
    startTime: null
}));

// Staff Users Dataset
const USERS = [
    { staffId: "ST001", username: "sandy", password: "123456", role: "Admin" },
    { staffId: "ST002", username: "kumar", password: "123456", role: "Staff" },
    { staffId: "ST003", username: "priya", password: "123456", role: "Staff" },
    { staffId: "ST004", username: "arun", password: "123456", role: "Manager" },
    { staffId: "ST000", username: "admin", password: "1234", role: "Admin" }
];

// =========================================================================
// 2. STATE MANAGER & STORAGE LAYER
// =========================================================================
const Storage = {
    getTables() {
        try {
            const t = localStorage.getItem('hb_tables');
            if (!t) return JSON.parse(JSON.stringify(DEFAULT_TABLES));
            const parsed = JSON.parse(t);
            if (Array.isArray(parsed) && parsed.length === 10) {
                // Ensure each table object has the proper keys
                const isValid = parsed.every(table => 
                    table && 
                    typeof table.id === 'number' && 
                    typeof table.status === 'string' &&
                    Array.isArray(table.items)
                );
                if (isValid) return parsed;
            }
            return JSON.parse(JSON.stringify(DEFAULT_TABLES));
        } catch (e) {
            console.error("Failed to load tables from storage:", e);
            return JSON.parse(JSON.stringify(DEFAULT_TABLES));
        }
    },
    saveTables(tables) {
        try {
            localStorage.setItem('hb_tables', JSON.stringify(tables));
        } catch (e) {
            console.error("Failed to save tables to storage:", e);
        }
    },
    getOrders() {
        try {
            const o = localStorage.getItem('hb_orders');
            if (!o) return [];
            const parsed = JSON.parse(o);
            if (Array.isArray(parsed)) {
                // Ensure each order object has proper keys
                const isValid = parsed.every(order => 
                    order && 
                    typeof order.orderId === 'string' && 
                    typeof order.tableId === 'number' && 
                    Array.isArray(order.items)
                );
                if (isValid) return parsed;
            }
            return [];
        } catch (e) {
            console.error("Failed to load orders from storage:", e);
            return [];
        }
    },
    saveOrders(orders) {
        try {
            localStorage.setItem('hb_orders', JSON.stringify(orders));
        } catch (e) {
            console.error("Failed to save orders to storage:", e);
        }
    },
    getNextOrderId() {
        try {
            const id = localStorage.getItem('hb_next_order_id');
            if (!id) return 1;
            const parsed = parseInt(id);
            return isNaN(parsed) ? 1 : parsed;
        } catch (e) {
            console.error("Failed to load next order id from storage:", e);
            return 1;
        }
    },
    saveNextOrderId(id) {
        try {
            localStorage.setItem('hb_next_order_id', id);
        } catch (e) {
            console.error("Failed to save next order id to storage:", e);
        }
    },
    getCurrentUser() {
        try {
            const sessionUser = sessionStorage.getItem("loggedInUser");
            if (sessionUser) return JSON.parse(sessionUser);
            const localUser = localStorage.getItem("hb_current_user");
            if (localUser) return JSON.parse(localUser);
            return null;
        } catch (e) {
            console.error("Failed to load current user from storage:", e);
            return null;
        }
    },
    saveCurrentUser(userObj) {
        try {
            if (userObj) {
                sessionStorage.setItem("loggedInUser", JSON.stringify(userObj));
                localStorage.setItem("hb_current_user", JSON.stringify(userObj));
            } else {
                sessionStorage.clear();
                localStorage.removeItem("hb_current_user");
            }
        } catch (e) {
            console.error("Failed to save current user to storage:", e);
        }
    }
};

// Global Memory Cache
let g_tables = [];
let g_orders = [];
let g_nextOrderIdCounter = 1;
let g_activeTableId = null; 
let g_tableFilter = 'all';
let g_searchQuery = '';
let g_selectedCategory = 'active';
let g_dashCategory = 'active';
let g_modalCallback = null;

// =========================================================================
// 3. INITIALIZATION & ROUTING
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
    // Load local storage states
    g_tables = Storage.getTables();
    g_orders = Storage.getOrders();
    g_nextOrderIdCounter = Storage.getNextOrderId();

    // Verify session
    const loggedInUser = Storage.getCurrentUser();
    if (loggedInUser) {
        document.body.classList.remove('login-active');
        document.getElementById('app-shell').classList.remove('hidden');
        updateUserUI(loggedInUser);
        showSection('dashboard');
    } else {
        document.body.classList.add('login-active');
        document.getElementById('app-shell').classList.add('hidden');
        const loginForm = document.getElementById('login-form');
        if (loginForm) loginForm.reset();
        const errorEl = document.getElementById('errorMessage');
        if (errorEl) errorEl.style.display = 'none';
    }

    // Run active clock
    startClock();
    
    // Select first available table
    selectNextAvailableTable();
    
    // Initial renders
    renderDashboard();
    initMenu();

    // Attach all UI triggers
    attachEventListeners();
});

// Helper function to update logged in user UI in navbar & dashboard
function updateUserUI(user) {
    if (!user) return;
    const userDisplay = document.getElementById('user-display');
    const userRole = document.getElementById('user-role');
    const userAvatar = document.getElementById('user-avatar');
    const welcomeMsg = document.getElementById('welcome-message');

    if (userDisplay) userDisplay.textContent = `${user.username} (${user.role})`;
    if (userRole) userRole.textContent = `ID: ${user.staffId}`;
    if (userAvatar && user.username) {
        userAvatar.textContent = user.username.charAt(0).toUpperCase();
        userAvatar.title = `${user.username} (${user.role}) - ID: ${user.staffId}`;
    }
    if (welcomeMsg && user.username) welcomeMsg.textContent = `Welcome, ${user.username}! Select a table to start a new food order.`;
}

// Real-Time System Clock
function startClock() {
    const updateTime = () => {
        const now = new Date();
        // Time format: 13 Aug 2026, 12:34:25 PM
        const optionsDate = { day: 'numeric', month: 'short', year: 'numeric' };
        const dateStr = now.toLocaleDateString('en-GB', optionsDate);
        const timeStr = now.toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' });
        
        const displayString = `${dateStr}, ${timeStr}`;
        document.getElementById('system-time-display').textContent = displayString;
    };
    updateTime();
    setInterval(updateTime, 1000);
}

// Timing Helpers for Auto Menu Filter
function getActiveSessionByTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const totalMinutes = hours * 60 + minutes;

    // Indian Hostel Meal Timings (Minutes from midnight)
    const bStart = 6 * 60;        // 6:00 AM
    const bEnd = 11 * 60 + 30;   // 11:30 AM (Morning Breakfast)
    const lStart = 11 * 60 + 30; // 11:30 AM
    const lEnd = 15 * 60 + 30;   // 3:30 PM (Lunch)
    const sStart = 15 * 60 + 30; // 3:30 PM
    const sEnd = 18 * 60 + 30;   // 6:30 PM (Snacks)
    const dStart = 18 * 60 + 30; // 6:30 PM
    const dEnd = 23 * 60;        // 11:00 PM (Dinner)

    if (totalMinutes >= bStart && totalMinutes < bEnd) {
        return 'breakfast';
    } else if (totalMinutes >= lStart && totalMinutes < lEnd) {
        return 'lunch';
    } else if (totalMinutes >= sStart && totalMinutes < sEnd) {
        return 'snacks';
    } else if (totalMinutes >= dStart && totalMinutes < dEnd) {
        return 'dinner';
    }
    return 'drinks'; // Fallback / Late Night
}

function updateSessionBadgeDisplay() {
    const badge = document.getElementById('session-indicator-display');
    if (badge) {
        const session = getActiveSessionByTime();
        let label = 'Drinks & Beverages';
        if (session === 'breakfast') label = 'Breakfast Session (6:00 AM - 11:30 AM)';
        else if (session === 'lunch') label = 'Lunch Session (11:30 AM - 3:30 PM)';
        else if (session === 'snacks') label = 'Snacks Session (3:30 PM - 6:30 PM)';
        else if (session === 'dinner') label = 'Dinner Session (6:30 PM - 11:00 PM)';
        
        badge.innerHTML = `<i class="fa-solid fa-clock"></i> ${label}`;
    }
}

function showUnavailableToast(name) {
    const activeSession = getActiveSessionByTime();
    const sessionNames = {
        breakfast: 'Morning Breakfast Session (6:00 AM – 11:30 AM)',
        lunch: 'Lunch Session (11:30 AM – 3:30 PM)',
        snacks: 'Snacks Session (3:30 PM – 6:30 PM)',
        dinner: 'Dinner Session (6:30 PM – 11:00 PM)',
        drinks: 'Drinks & Beverages'
    };
    const currentSessionName = sessionNames[activeSession] || 'Current Session';
    showToast(`"${name}" cannot be added. Only items available for ${currentSessionName} can be ordered right now.`, 'warning');
}

// Single Page View Router
function showSection(sectionId) {
    if (sectionId === 'ordering') {
        updateSessionBadgeDisplay();
    }
    
    // Hide all view sections
    document.querySelectorAll('.view-section').forEach(sec => {
        sec.classList.remove('active');
        sec.classList.add('hidden');
    });

    // Show selected section
    const targetSection = document.getElementById(`view-${sectionId}`);
    if (targetSection) {
        targetSection.classList.remove('hidden');
        targetSection.classList.add('active');
    }

    // Toggle active state in navigation
    document.querySelectorAll('.app-nav .nav-link').forEach(btn => {
        if (btn.getAttribute('data-target') === sectionId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Hide mobile navigation drawer & overlays on section change
    const appNav = document.querySelector('.app-nav');
    const navOverlay = document.getElementById('nav-overlay');
    if (appNav) appNav.classList.remove('open');
    if (navOverlay) navOverlay.classList.remove('open');

    const cartSidebar = document.getElementById('live-cart-sidebar');
    const cartOverlay = document.getElementById('cart-drawer-overlay');
    if (cartSidebar) cartSidebar.classList.remove('open');
    if (cartOverlay) cartOverlay.classList.remove('open');

    // Change background decoration food images depending on page target
    const deco1 = document.querySelector('.deco-1');
    const deco2 = document.querySelector('.deco-2');
    const deco3 = document.querySelector('.deco-3');
    if (deco1 && deco2 && deco3) {
        if (sectionId === 'dashboard') {
            deco1.style.backgroundImage = "url('images/french_fries.jpg')";
            deco2.style.backgroundImage = "url('images/chicken_biryani.jpg')";
            deco3.style.backgroundImage = "url('images/sandwich.jpg')";
        } else if (sectionId === 'kitchen') {
            deco1.style.backgroundImage = "url('images/chapati.jpg')";
            deco2.style.backgroundImage = "url('images/gobi_manchurian.jpg')";
            deco3.style.backgroundImage = "url('images/coffee.jpg')";
        } else if (sectionId === 'history') {
            deco1.style.backgroundImage = "url('images/gulab_jamun.jpg')";
            deco2.style.backgroundImage = "url('images/samosa.jpg')";
            deco3.style.backgroundImage = "url('images/fresh_lime.jpg')";
        } else if (sectionId === 'settings') {
            deco1.style.backgroundImage = "url('images/ice_cream.jpg')";
            deco2.style.backgroundImage = "url('images/vada.jpg')";
            deco3.style.backgroundImage = "url('images/tea.jpg')";
        } else {
            deco1.style.backgroundImage = "url('images/chips.jpg')";
            deco2.style.backgroundImage = "url('images/paneer_curry.jpg')";
            deco3.style.backgroundImage = "url('images/milkshake.jpg')";
        }
    }

    // Section-specific hooks
    if (sectionId === 'dashboard') {
        renderDashboard();
    } else if (sectionId === 'kitchen') {
        renderKitchen();
    } else if (sectionId === 'history') {
        renderHistory();
    }
}

// =========================================================================
// 4. TOAST NOTIFICATIONS HELPER
// =========================================================================
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let iconClass = 'fa-circle-check';
    if (type === 'error') iconClass = 'fa-circle-xmark';
    else if (type === 'warning') iconClass = 'fa-triangle-exclamation';
    else if (type === 'info') iconClass = 'fa-circle-info';

    toast.innerHTML = `
        <i class="fa-solid ${iconClass} toast-icon"></i>
        <div class="toast-message">${message}</div>
        <button class="toast-close" onclick="this.parentElement.remove()"><i class="fa-solid fa-xmark"></i></button>
    `;

    container.appendChild(toast);

    // Auto-remove after 4 seconds
    setTimeout(() => {
        toast.style.animation = 'toastSlideIn 0.3s reverse forwards';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// Reusable Confirmation Dialog Modal
function openConfirmModal(title, message, isDanger, onConfirm) {
    const overlay = document.getElementById('modal-overlay');
    const card = document.getElementById('confirm-modal');
    
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-message').textContent = message;
    
    if (isDanger) {
        card.classList.add('modal-danger');
    } else {
        card.classList.remove('modal-danger');
    }

    overlay.classList.remove('hidden');
    g_modalCallback = onConfirm;
}

function closeConfirmModal() {
    document.getElementById('modal-overlay').classList.add('hidden');
    g_modalCallback = null;
}

// =========================================================================
// 5. ATTACH GENERAL EVENT LISTENERS
// =========================================================================
function attachEventListeners() {
    // 1. UNIVERSAL LOGIN HANDLER (ANY USERNAME & PASSWORD ACCEPTED)
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const usernameVal = document.getElementById('username').value.trim();
        const errorEl = document.getElementById('errorMessage');

        if (errorEl) errorEl.style.display = 'none';

        const enteredUser = usernameVal || 'Staff User';
        
        // Find if matching predefined user profile or auto-generate staff profile
        const foundUser = USERS.find(item => 
            item.username.toLowerCase() === enteredUser.toLowerCase() || 
            item.staffId.toLowerCase() === enteredUser.toLowerCase()
        );

        const userObj = {
            username: foundUser ? foundUser.username : (enteredUser.charAt(0).toUpperCase() + enteredUser.slice(1)),
            staffId: foundUser ? foundUser.staffId : 'EMP-' + Math.floor(1000 + Math.random() * 9000),
            role: foundUser ? foundUser.role : 'Canteen Staff'
        };

        Storage.saveCurrentUser(userObj);

        // 100% BRAND NEW WEBSITE RESET ON EVERY LOGIN:
        // Reset all 10 tables to default clean "Available" status
        g_tables = JSON.parse(JSON.stringify(DEFAULT_TABLES));
        Storage.saveTables(g_tables);

        // Clear active cart & active table selections
        g_cart = [];
        g_activeTableId = null;
        g_tableFilter = 'all';

        // Clear previous orders history & reset order counter back to #ORD-001
        g_orders = [];
        g_nextOrderIdCounter = 1;
        Storage.saveOrders(g_orders);
        Storage.saveNextOrderId(1);
        
        document.body.classList.remove('login-active');
        document.getElementById('app-shell').classList.remove('hidden');
        
        updateUserUI(userObj);
        renderCart();
        renderDashboard();
        
        showSection('dashboard');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        showToast(`Welcome, ${userObj.username}! Opening brand new clean website session.`, 'success');
        
        const loginForm = document.getElementById('login-form');
        if (loginForm) loginForm.reset();
    });

    // Toggle password view
    document.getElementById('toggle-password').addEventListener('click', () => {
        const passInput = document.getElementById('password');
        const eyeIcon = document.getElementById('eye-icon');
        if (passInput.type === 'password') {
            passInput.type = 'text';
            eyeIcon.className = 'fa-solid fa-eye-slash';
        } else {
            passInput.type = 'password';
            eyeIcon.className = 'fa-solid fa-eye';
        }
    });

    // 2. LOGOUT HANDLERS (Navbar & Settings Page Logout)
    const performLogout = () => {
        openConfirmModal('Logout Session', 'Are you sure you want to log out of the HostelBite system?', false, () => {
            Storage.saveCurrentUser(null);
            document.body.classList.add('login-active');
            document.getElementById('app-shell').classList.add('hidden');
            const errorEl = document.getElementById('errorMessage');
            if (errorEl) errorEl.style.display = 'none';
            const loginForm = document.getElementById('login-form');
            if (loginForm) loginForm.reset();
            closeConfirmModal();
            showToast('Logged out successfully.', 'info');
        });
    };

    const headerLogoutBtn = document.getElementById('logout-btn');
    if (headerLogoutBtn) headerLogoutBtn.addEventListener('click', performLogout);

    const settingsLogoutBtn = document.getElementById('settings-logout-btn');
    if (settingsLogoutBtn) settingsLogoutBtn.addEventListener('click', performLogout);

    // 3. NAVIGATION VIEW SWAPPING
    document.querySelectorAll('.app-nav .nav-link').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-target');
            showSection(target);
        });
    });

    // Mobile Navigation burger button toggle & overlay
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navOverlay = document.getElementById('nav-overlay');
    const appNav = document.querySelector('.app-nav');

    if (mobileMenuToggle && appNav) {
        mobileMenuToggle.addEventListener('click', () => {
            const isOpen = appNav.classList.toggle('open');
            if (navOverlay) navOverlay.classList.toggle('open', isOpen);
        });
    }

    if (navOverlay && appNav) {
        navOverlay.addEventListener('click', () => {
            appNav.classList.remove('open');
            navOverlay.classList.remove('open');
        });
    }

    // Mobile Live Cart Drawer Toggle & Backdrop Overlay
    const mobileCartToggleBtn = document.getElementById('mobile-cart-toggle-btn');
    const liveCartSidebar = document.getElementById('live-cart-sidebar');
    const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');
    const cartDrawerCloseBtn = document.getElementById('cart-drawer-close-btn');

    function toggleMobileCartDrawer(open) {
        if (!liveCartSidebar) return;
        const isCurrentlyOpen = liveCartSidebar.classList.contains('open');
        const shouldOpen = open !== undefined ? open : !isCurrentlyOpen;

        if (shouldOpen) {
            liveCartSidebar.classList.add('open');
            if (cartDrawerOverlay) cartDrawerOverlay.classList.add('open');
        } else {
            liveCartSidebar.classList.remove('open');
            if (cartDrawerOverlay) cartDrawerOverlay.classList.remove('open');
        }
    }

    if (mobileCartToggleBtn) {
        mobileCartToggleBtn.addEventListener('click', () => toggleMobileCartDrawer(true));
    }
    if (cartDrawerCloseBtn) {
        cartDrawerCloseBtn.addEventListener('click', () => toggleMobileCartDrawer(false));
    }
    if (cartDrawerOverlay) {
        cartDrawerOverlay.addEventListener('click', () => toggleMobileCartDrawer(false));
    }

    // Stat Card Filter Click Events
    document.querySelectorAll('.luxury-stat-card').forEach(card => {
        card.addEventListener('click', () => {
            const filterType = card.getAttribute('data-stat-filter') || 'all';
            g_tableFilter = filterType;
            renderDashboard();
        });
    });

    const resetTableFilterBtn = document.getElementById('btn-reset-table-filter');
    if (resetTableFilterBtn) {
        resetTableFilterBtn.addEventListener('click', () => {
            g_tableFilter = 'all';
            renderDashboard();
        });
    }

    // 4. ORDERING BACK BUTTONS
    document.getElementById('btn-back-to-dash-from-menu').addEventListener('click', () => {
        saveActiveTableState();
        showSection('dashboard');
    });

    // 5. SEARCH & FILTER EVENTS
    const searchInput = document.getElementById('food-search-input');
    const clearSearchBtn = document.getElementById('clear-search-btn');

    searchInput.addEventListener('input', (e) => {
        g_searchQuery = e.target.value.toLowerCase();
        clearSearchBtn.style.display = g_searchQuery ? 'block' : 'none';
        renderMenu();
    });

    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        g_searchQuery = '';
        clearSearchBtn.style.display = 'none';
        renderMenu();
    });

    // Category Tabs click binding
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            g_selectedCategory = tab.getAttribute('data-category');
            renderMenu();
        });
    });

    // Dashboard Food Showcase Category Tabs
    document.querySelectorAll('#dash-category-tabs .dash-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('#dash-category-tabs .dash-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            g_dashCategory = tab.getAttribute('data-dash-cat');
            renderDashboardFoodGrid();
        });
    });

    // 6. CART BUTTON EVENTS
    document.getElementById('btn-clear-cart').addEventListener('click', () => {
        openConfirmModal('Clear Order', 'Reset this table cart? All selected food items will be removed.', true, () => {
            const table = g_tables.find(t => t.id === g_activeTableId);
            table.items = [];
            table.itemsCount = 0;
            table.totalAmount = 0;
            
            // If they clear the cart, it does not mean they cancel the student name if entered, but let's reset status
            table.status = 'available';
            table.currentOrderId = null;
            table.startTime = null;

            Storage.saveTables(g_tables);
            renderCart();
            renderMenu(); // Reset menu quantities displays
            closeConfirmModal();
            showToast('Table order cleared.', 'info');
        });
    });

    document.getElementById('btn-review-cart').addEventListener('click', () => {
        const table = g_tables.find(t => t.id === g_activeTableId);
        const nameVal = document.getElementById('student-name').value.trim();
        const numPeople = parseInt(document.getElementById('num-people').value) || 1;

        if (table.items.length === 0) {
            showToast('The order cart is empty! Add food items first.', 'warning');
            return;
        }

        if (!nameVal) {
            showToast('Please enter the Student or Guest name.', 'warning');
            document.getElementById('student-name').focus();
            return;
        }

        // Save metadata fields on active table state
        table.customerName = nameVal;
        table.numPeople = numPeople;
        Storage.saveTables(g_tables);

        openReviewPage(table);
    });

    // Review Page Actions
    document.getElementById('btn-edit-order').addEventListener('click', () => {
        showSection('ordering');
    });

    document.getElementById('btn-confirm-order').addEventListener('click', () => {
        confirmOrderSubmission();
    });

    // 7. KITCHEN NAVIGATION TRIGGERS
    document.getElementById('btn-kitchen-go-to-dash').addEventListener('click', () => showSection('dashboard'));

    // 8. SERVED PAGE BUTTONS
    document.getElementById('btn-generate-bill-from-served').addEventListener('click', () => {
        const table = g_tables.find(t => t.id === g_activeTableId);
        if (table && table.currentOrderId) {
            generateInvoice(table.currentOrderId);
        }
    });

    document.getElementById('btn-back-to-dash-from-served').addEventListener('click', () => showSection('dashboard'));

    const btnReleaseServed = document.getElementById('btn-release-from-served');
    if (btnReleaseServed) {
        btnReleaseServed.addEventListener('click', () => {
            if (g_activeTableId) releaseTable(g_activeTableId);
        });
    }

    // 9. INVOICE/BILL ACTIONS
    document.getElementById('btn-bill-back-to-dash').addEventListener('click', () => showSection('dashboard'));

    document.getElementById('btn-bill-print').addEventListener('click', () => {
        window.print();
    });

    document.getElementById('btn-bill-download').addEventListener('click', () => {
        // Mock download PDF
        showToast('Preparing download... Invoice saved to PDF format successfully.', 'success');
    });

    let g_pendingPayOrderId = null;

    function openQRModal(orderId) {
        const order = g_orders.find(o => o.orderId === orderId);
        const amount = order ? order.total : 0;
        g_pendingPayOrderId = orderId;

        const amountEl = document.getElementById('qr-modal-amount-display');
        if (amountEl) amountEl.textContent = `₹${amount}`;

        const qrModal = document.getElementById('qr-modal-overlay');
        if (qrModal) qrModal.classList.remove('hidden');
    }

    function closeQRModal() {
        const qrModal = document.getElementById('qr-modal-overlay');
        if (qrModal) qrModal.classList.add('hidden');
    }

    const btnShowQR = document.getElementById('btn-show-qr-modal');
    if (btnShowQR) {
        btnShowQR.addEventListener('click', () => {
            const orderId = document.getElementById('bill-order-id').textContent;
            openQRModal(orderId);
        });
    }

    document.getElementById('btn-bill-pay').addEventListener('click', () => {
        const orderId = document.getElementById('bill-order-id').textContent;
        openQRModal(orderId);
    });

    const qrCloseBtn = document.getElementById('qr-modal-close-btn');
    const qrDoneBtn = document.getElementById('qr-modal-done-btn');
    const qrConfirmPayBtn = document.getElementById('qr-modal-confirm-pay-btn');

    if (qrCloseBtn) qrCloseBtn.addEventListener('click', closeQRModal);
    if (qrDoneBtn) qrDoneBtn.addEventListener('click', closeQRModal);
    if (qrConfirmPayBtn) {
        qrConfirmPayBtn.addEventListener('click', () => {
            if (g_pendingPayOrderId) {
                markOrderPaid(g_pendingPayOrderId);
            }
            closeQRModal();
        });
    }

    document.getElementById('btn-bill-deliver').addEventListener('click', () => {
        if (g_activeTableId) {
            releaseTable(g_activeTableId);
        } else {
            const orderId = document.getElementById('bill-order-id').textContent;
            markOrderDelivered(orderId);
        }
    });

    // 10. HISTORY FILTERS & BACK EVENTS
    const btnHistoryBack = document.getElementById('btn-history-back-to-dash');
    if (btnHistoryBack) {
        btnHistoryBack.addEventListener('click', () => showSection('dashboard'));
    }

    const btnSettingsBack = document.getElementById('btn-settings-back-to-dash');
    if (btnSettingsBack) {
        btnSettingsBack.addEventListener('click', () => showSection('dashboard'));
    }

    document.getElementById('history-search').addEventListener('input', renderHistory);
    document.getElementById('history-filter-table').addEventListener('change', renderHistory);
    document.getElementById('history-filter-status').addEventListener('change', renderHistory);
    document.getElementById('history-filter-date').addEventListener('change', renderHistory);
    document.getElementById('btn-clear-history-filters').addEventListener('click', () => {
        document.getElementById('history-search').value = '';
        document.getElementById('history-filter-table').value = 'all';
        document.getElementById('history-filter-status').value = 'all';
        document.getElementById('history-filter-date').value = '';
        renderHistory();
        showToast('History filters reset.', 'info');
    });

    // Mobile Cart overlay toggle
    document.getElementById('mobile-cart-toggle-btn').addEventListener('click', () => {
        document.getElementById('live-cart-sidebar').classList.toggle('open');
    });

    // Modal click buttons
    document.getElementById('modal-cancel-btn').addEventListener('click', closeConfirmModal);
    document.getElementById('modal-confirm-btn').addEventListener('click', () => {
        if (g_modalCallback) g_modalCallback();
    });
}

// =========================================================================
// 6. DASHBOARD & STATS GENERATOR
// =========================================================================
// =========================================================================
// 6. DASHBOARD & STATS GENERATOR WITH STAT FILTERING
// =========================================================================
function resetTableFilter() {
    g_tableFilter = 'all';
    renderDashboard();
}
window.resetTableFilter = resetTableFilter;

function renderDashboard() {
    const grid = document.getElementById('tables-grid-container');
    grid.innerHTML = '';

    // Calculate metrics
    let totalTables = g_tables.length;
    let availableCount = 0;
    let activeOrdersCount = 0;
    let preparingCount = 0;
    let deliveredCount = 0;

    // Today's revenue calculation based on paid orders today
    let todayStr = new Date().toDateString();
    let todayRevenue = g_orders
        .filter(o => o.paymentStatus === 'paid' && new Date(o.createdAt).toDateString() === todayStr)
        .reduce((sum, o) => sum + o.total, 0);

    g_tables.forEach(table => {
        // Increment statuses
        if (table.status === 'available') availableCount++;
        else activeOrdersCount++;

        if (table.status === 'preparing' || table.status === 'placed' || table.status === 'confirmed') preparingCount++;
        if (table.status === 'ready') preparingCount++; // Ready items counts in kitchen flow prep
        if (table.status === 'delivered') deliveredCount++;
    });

    // Update Stats counters in UI
    document.getElementById('stat-total-tables').textContent = totalTables;
    document.getElementById('stat-available-tables').textContent = availableCount;
    document.getElementById('stat-active-orders').textContent = activeOrdersCount;
    document.getElementById('stat-preparing-orders').textContent = preparingCount;
    document.getElementById('stat-delivered-orders').textContent = deliveredCount;
    document.getElementById('stat-revenue').textContent = `₹${todayRevenue}`;

    // Highlight selected stat card filter
    document.querySelectorAll('.luxury-stat-card').forEach(card => {
        const filterType = card.getAttribute('data-stat-filter');
        if (filterType === g_tableFilter) {
            card.classList.add('active-filter');
        } else {
            card.classList.remove('active-filter');
        }
    });

    // Filter tables based on g_tableFilter
    const filteredTables = g_tables.filter(table => {
        if (g_tableFilter === 'all') return true;
        if (g_tableFilter === 'available') return table.status === 'available';
        if (g_tableFilter === 'active') return table.status !== 'available';
        if (g_tableFilter === 'preparing') return ['preparing', 'placed', 'confirmed', 'ready'].includes(table.status);
        if (g_tableFilter === 'delivered') return table.status === 'delivered';
        if (g_tableFilter === 'revenue') return table.totalAmount > 0 || table.status !== 'available';
        return true;
    });

    // Update Filter Header text and reset button visibility
    const filterTitleEl = document.getElementById('tables-filter-title');
    const filterSubtitleEl = document.getElementById('tables-filter-subtitle');
    const resetBtnEl = document.getElementById('btn-reset-table-filter');

    if (g_tableFilter === 'all') {
        if (filterTitleEl) filterTitleEl.textContent = `All Tables (${totalTables})`;
        if (filterSubtitleEl) filterSubtitleEl.textContent = 'Select a table below to start a new order or manage active sessions.';
        if (resetBtnEl) resetBtnEl.classList.add('hidden');
    } else if (g_tableFilter === 'available') {
        if (filterTitleEl) filterTitleEl.textContent = `Available Tables (${availableCount})`;
        if (filterSubtitleEl) filterSubtitleEl.textContent = 'Showing open tables ready for guest seating and new food orders.';
        if (resetBtnEl) resetBtnEl.classList.remove('hidden');
    } else if (g_tableFilter === 'active') {
        if (filterTitleEl) filterTitleEl.textContent = `Active Order Tables (${activeOrdersCount})`;
        if (filterSubtitleEl) filterSubtitleEl.textContent = 'Showing tables with ongoing active orders or draft ordering sessions.';
        if (resetBtnEl) resetBtnEl.classList.remove('hidden');
    } else if (g_tableFilter === 'preparing') {
        if (filterTitleEl) filterTitleEl.textContent = `Preparing Kitchen Tables (${preparingCount})`;
        if (filterSubtitleEl) filterSubtitleEl.textContent = 'Showing tables with food currently being prepared in the kitchen.';
        if (resetBtnEl) resetBtnEl.classList.remove('hidden');
    } else if (g_tableFilter === 'delivered') {
        if (filterTitleEl) filterTitleEl.textContent = `Delivered Tables (${deliveredCount})`;
        if (filterSubtitleEl) filterSubtitleEl.textContent = 'Showing tables where food has been delivered to guests.';
        if (resetBtnEl) resetBtnEl.classList.remove('hidden');
    } else if (g_tableFilter === 'revenue') {
        if (filterTitleEl) filterTitleEl.textContent = `Revenue Active Tables (Today: ₹${todayRevenue})`;
        if (filterSubtitleEl) filterSubtitleEl.textContent = 'Showing active tables contributing to today\'s canteen transactions.';
        if (resetBtnEl) resetBtnEl.classList.remove('hidden');
    }

    // Render Filter Empty State
    if (filteredTables.length === 0) {
        grid.innerHTML = `
            <div class="empty-tables-filter">
                <i class="fa-solid fa-filter-circle-xmark"></i>
                <h3>No Tables Found</h3>
                <p>There are currently no tables matching the selected filter.</p>
                <button class="btn btn-primary btn-sm" onclick="resetTableFilter()"><i class="fa-solid fa-rotate-left"></i> Show All Tables</button>
            </div>
        `;
    } else {
        filteredTables.forEach(table => {
            // Render card
            const card = document.createElement('div');
            card.className = `table-card ${table.status}`;
            card.setAttribute('data-id', table.id);

            let statusText = 'Available';
            if (table.status === 'ordering') statusText = 'Ordering';
            else if (table.status === 'placed' || table.status === 'confirmed') statusText = 'Order Confirmed';
            else if (table.status === 'preparing') statusText = 'Preparing';
            else if (table.status === 'ready') statusText = 'Order Ready';
            else if (table.status === 'delivered') statusText = 'Delivered';

            let orderIdDisplay = table.currentOrderId || '—';
            let customerDisplay = table.customerName || '—';
            let timeDisplay = table.startTime ? formatTimeStr(new Date(table.startTime)) : '—';
            let itemsVal = table.itemsCount > 0 ? `${table.itemsCount} Items` : '—';
            let totalVal = table.totalAmount > 0 ? `₹${table.totalAmount}` : '—';

            card.innerHTML = `
                <h3>Table ${String(table.id).padStart(2, '0')}</h3>
                <span class="table-status-pill status-${table.status}">${statusText}</span>
                <div class="table-card-img-wrapper">
                    <img src="images/restaurant_table.png" alt="Table Scene">
                </div>
                <div class="table-details-list">
                    <div class="detail-row">
                        <span>Order ID:</span>
                        <span>${orderIdDisplay}</span>
                    </div>
                    <div class="detail-row">
                        <span>Customer:</span>
                        <span>${customerDisplay}</span>
                    </div>
                    <div class="detail-row">
                        <span>Time:</span>
                        <span>${timeDisplay}</span>
                    </div>
                    <div class="detail-row">
                        <span>Items:</span>
                        <span>${itemsVal}</span>
                    </div>
                    <div class="detail-row total-amount">
                        <span>Total:</span>
                        <span>${totalVal}</span>
                    </div>
                </div>
            `;

            card.addEventListener('click', () => selectTable(table.id));
            grid.appendChild(card);
        });
    }

    // Render Dashboard Food Items Showcase Grid
    renderDashboardFoodGrid();
}

// Render Dashboard Food Showcase Grid
function renderDashboardFoodGrid() {
    const grid = document.getElementById('dashboard-food-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const activeSession = getActiveSessionByTime();

    const filtered = FOOD_MENU.filter(item => {
        if (g_dashCategory === 'all') return true;
        if (g_dashCategory === 'active') return item.category === 'drinks' || (item.timings && item.timings.includes(activeSession));
        if (g_dashCategory === 'drinks') return item.category === 'drinks' || (item.timings && item.timings.includes('drinks'));
        return item.timings && item.timings.includes(g_dashCategory);
    });

    // Duplicate list for continuous infinite marquee scrolling
    const displayItems = filtered.length > 0 ? [...filtered, ...filtered] : [];

    displayItems.forEach(item => {
        const isAvailableInSession = item.category === 'drinks' || (item.timings && item.timings.includes(activeSession));
        const card = document.createElement('div');
        card.className = `food-card ${!isAvailableInSession ? 'item-unavailable' : ''}`;

        const vegClass = item.isVeg ? 'veg' : 'nonveg';
        const vegIcon = item.isVeg ? 'fa-circle' : 'fa-play';
        const vegText = item.isVeg ? 'VEG' : 'NON-VEG';

        const imgMarkup = item.image 
            ? `<img src="${item.image}" alt="${item.name}" class="food-img" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop';">` 
            : `<div class="food-img-placeholder"><i class="fa-solid ${getCategoryIcon(item.category)}"></i></div>`;

        let actionBtnHtml = '';
        if (isAvailableInSession) {
            actionBtnHtml = `<button class="food-add-btn" onclick="quickOrderFromDash('${item.name}', ${item.price})">ADD</button>`;
        } else {
            actionBtnHtml = `<button class="food-add-btn disabled-btn" title="Not available in current session" onclick="showUnavailableToast('${item.name}')">Unavailable</button>`;
        }

        card.innerHTML = `
            ${imgMarkup}
            <div class="food-content">
                <span class="veg-indicator ${vegClass}">
                    <i class="fa-solid ${vegIcon}"></i> ${vegText}
                </span>
                <h4>${item.name}</h4>
                <p class="desc">${item.desc}</p>
                <div class="food-card-footer">
                    ${actionBtnHtml}
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Scroll Dashboard Food Showcase Row horizontally
function scrollDashFoodRow(amount) {
    const grid = document.getElementById('dashboard-food-grid');
    if (grid) {
        grid.scrollBy({ left: amount, behavior: 'smooth' });
    }
}

// Automatically select the next available table sequentially (e.g. Table 1 -> Table 2 -> Table 3)
function selectNextAvailableTable() {
    const currentId = g_activeTableId || 0;
    
    // Find next available table after current active table ID
    let nextTable = g_tables.find(t => t.id > currentId && (t.status === 'available' || t.status === 'ordering'));
    
    // If none found after current ID, wrap around starting from Table 1
    if (!nextTable) {
        nextTable = g_tables.find(t => (t.status === 'available' || t.status === 'ordering'));
    }
    
    if (nextTable) {
        g_activeTableId = nextTable.id;
        if (nextTable.status === 'available') {
            nextTable.status = 'ordering';
            nextTable.currentOrderId = generateNewOrderId();
            nextTable.startTime = new Date().toISOString();
            Storage.saveTables(g_tables);
        }
    }
    return g_activeTableId;
}

function quickOrderFromDash(name, price) {
    const item = FOOD_MENU.find(i => i.name === name);
    const activeSession = getActiveSessionByTime();
    const isAvailableInSession = item && (item.category === 'drinks' || (item.timings && item.timings.includes(activeSession)));

    if (!isAvailableInSession) {
        showUnavailableToast(name);
        return;
    }

    let table = g_tables.find(t => t.id === g_activeTableId);
    
    // If no active table OR active table is locked/confirmed, auto-advance to next available table (Table 2, 3...)
    if (!table || (table.status !== 'available' && table.status !== 'ordering')) {
        selectNextAvailableTable();
        table = g_tables.find(t => t.id === g_activeTableId);
    }
    
    if (table) {
        if (table.status === 'available') {
            table.status = 'ordering';
            table.currentOrderId = generateNewOrderId();
            table.startTime = new Date().toISOString();
        }
        const existingItem = table.items.find(i => i.name === name);
        if (existingItem) {
            existingItem.qty += 1;
        } else {
            table.items.push({ name, price, qty: 1 });
        }
        Storage.saveTables(g_tables);
        showToast(`Added ${name} to Table ${String(table.id).padStart(2, '0')}`, 'success');
        renderDashboard();
    }
}

// Expose quickOrderFromDash to window for inline onclick
window.quickOrderFromDash = quickOrderFromDash;
window.selectNextAvailableTable = selectNextAvailableTable;

// Select a table and redirect to Ordering view or View Existing Order
function selectTable(tableId) {
    g_activeTableId = tableId;
    const table = g_tables.find(t => t.id === tableId);
    if (!table) return;

    // IF TABLE HAS A CONFIRMED/LOCKED ORDER (placed, preparing, ready, delivered):
    // Show existing order instead of creating a duplicate order!
    if (table.status !== 'available' && table.status !== 'ordering') {
        if (table.currentOrderId) {
            showToast(`Table ${String(tableId).padStart(2, '0')} has an active confirmed order (${table.currentOrderId}). Showing order details.`, 'info');
            generateInvoice(table.currentOrderId);
        } else {
            showToast(`Table ${String(tableId).padStart(2, '0')} is currently locked for an active order.`, 'warning');
            showSection('dashboard');
        }
        return;
    }

    // Set header details
    document.getElementById('order-table-title').textContent = `Table ${String(tableId).padStart(2, '0')}`;
    
    // Generate Order ID if empty (for fresh available tables)
    if (!table.currentOrderId) {
        table.currentOrderId = generateNewOrderId();
        table.status = 'ordering';
        table.startTime = new Date().toISOString();
        Storage.saveTables(g_tables);
    }

    document.getElementById('order-id-display').textContent = table.currentOrderId;
    
    // Format timestamp
    const startD = new Date(table.startTime);
    document.getElementById('order-timestamp-display').innerHTML = `
        <i class="fa-regular fa-clock"></i> Opened at: ${startD.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
    `;

    // Prefill name and guest fields if saved
    document.getElementById('student-name').value = table.customerName || '';
    document.getElementById('num-people').value = table.numPeople || 1;

    // Load category and search filters
    g_searchQuery = '';
    g_selectedCategory = 'active';
    document.getElementById('food-search-input').value = '';
    document.getElementById('clear-search-btn').style.display = 'none';
    
    document.querySelectorAll('.category-tab').forEach(t => {
        if (t.getAttribute('data-category') === 'active') t.classList.add('active');
        else t.classList.remove('active');
    });

    renderMenu();
    renderCart();

    showSection('ordering');
}

// Save name/num inputs when leaving or changing state
function saveActiveTableState() {
    if (!g_activeTableId) return;
    const table = g_tables.find(t => t.id === g_activeTableId);
    
    // Only modify table if it is currently in draft ordering mode
    if (table && table.status === 'ordering') {
        const nameVal = document.getElementById('student-name').value.trim();
        const numPeople = parseInt(document.getElementById('num-people').value) || 1;

        table.customerName = nameVal || null;
        table.numPeople = numPeople;

        // If cart is empty and no name is input, revert status to Available
        if (table.items.length === 0 && !nameVal) {
            table.status = 'available';
            table.currentOrderId = null;
            table.startTime = null;
        }
        
        Storage.saveTables(g_tables);
    }
}

// =========================================================================
// 7. FOOD MENU RENDERING AND SEARCH
// =========================================================================
function initMenu() {
    // Generate food cards into categorised grids once
    renderMenu();
}

function renderMenu() {
    const categories = ['main', 'secondary', 'snacks', 'drinks', 'desserts'];
    let overallMatchCount = 0;

    categories.forEach(cat => {
        const grid = document.getElementById(`${cat}-items-grid`);
        const section = document.getElementById(`sec-${cat}-items`);
        grid.innerHTML = '';

        // Filter items based on Category, Search Query, and Timings Tab
        const filtered = FOOD_MENU.filter(item => {
            const matchesCat = item.category === cat;
            const matchesSearch = item.name.toLowerCase().includes(g_searchQuery);
            
            let matchesTab = false;
            const activeSession = getActiveSessionByTime();
            
            if (g_selectedCategory === 'all') {
                matchesTab = true;
            } else if (g_selectedCategory === 'active') {
                matchesTab = item.timings && item.timings.includes(activeSession);
            } else if (g_selectedCategory === 'drinks') {
                matchesTab = item.category === 'drinks' || (item.timings && item.timings.includes('drinks'));
            } else {
                // breakfast, lunch, snacks, dinner
                matchesTab = item.timings && item.timings.includes(g_selectedCategory);
            }
            
            return matchesCat && matchesSearch && matchesTab;
        });

        if (filtered.length > 0) {
            section.classList.remove('hidden');
            overallMatchCount += filtered.length;
        } else {
            section.classList.add('hidden');
        }

        filtered.forEach(item => {
            // Check active quantity in cart
            let cartQty = 0;
            if (g_activeTableId) {
                const table = g_tables.find(t => t.id === g_activeTableId);
                const cartItem = table.items.find(i => i.name === item.name);
                if (cartItem) cartQty = cartItem.qty;
            }

            const activeSession = getActiveSessionByTime();
            const isAvailableInSession = item.timings && item.timings.includes(activeSession);

            const card = document.createElement('div');
            card.className = `food-card ${!isAvailableInSession ? 'item-unavailable' : ''}`;

            const vegClass = item.isVeg ? 'veg' : 'nonveg';
            const vegIcon = item.isVeg ? 'fa-circle' : 'fa-play';
            const vegText = item.isVeg ? 'VEG' : 'NON-VEG';

            const imgMarkup = item.image 
                ? `<img src="${item.image}" alt="${item.name}" class="food-img" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop';">` 
                : `<div class="food-img-placeholder"><i class="fa-solid ${getCategoryIcon(item.category)}"></i></div>`;

            let actionBtnHtml = '';
            if (cartQty > 0) {
                actionBtnHtml = `
                    <div class="quantity-selector">
                        <button class="quantity-btn min-btn" onclick="updateItemQuantity('${item.name}', -1)"><i class="fa-solid fa-minus"></i></button>
                        <span class="quantity-val">${cartQty}</span>
                        <button class="quantity-btn add-btn" onclick="updateItemQuantity('${item.name}', 1)"><i class="fa-solid fa-plus"></i></button>
                    </div>
                `;
            } else if (isAvailableInSession) {
                actionBtnHtml = `<button class="food-add-btn" onclick="addItemToOrder('${item.name}', ${item.price})">ADD</button>`;
            } else {
                actionBtnHtml = `<button class="food-add-btn disabled-btn" title="Not available in current session" onclick="showUnavailableToast('${item.name}')">Unavailable</button>`;
            }

            card.innerHTML = `
                ${imgMarkup}
                <div class="food-content">
                    <span class="veg-indicator ${vegClass}">
                        <i class="fa-solid ${vegIcon}"></i> ${vegText}
                    </span>
                    <h4>${item.name}</h4>
                    <p class="desc">${item.desc}</p>
                    <div class="food-card-footer">
                    ${actionBtnHtml}
                </div>
                </div>
            `;
            grid.appendChild(card);
        });
    });

    const emptyState = document.getElementById('empty-menu-state');
    if (overallMatchCount === 0) {
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
    }
}

function getCategoryIcon(cat) {
    switch (cat) {
        case 'main': return 'fa-bowl-rice';
        case 'secondary': return 'fa-drumstick-bite';
        case 'snacks': return 'fa-cookie';
        case 'drinks': return 'fa-mug-hot';
        case 'desserts': return 'fa-ice-cream';
        default: return 'fa-utensils';
    }
}

// =========================================================================
// 8. LIVE CART MANAGEMENT (TABLE SPECIFIC)
// =========================================================================
function renderCart() {
    const listContainer = document.getElementById('cart-items-list');
    listContainer.innerHTML = '';

    const table = g_tables.find(t => t.id === g_activeTableId);
    
    // Update sidebar title badge
    document.getElementById('cart-table-badge').textContent = `Table ${String(g_activeTableId).padStart(2, '0')}`;

    if (!table || table.items.length === 0) {
        listContainer.innerHTML = `
            <div class="cart-empty-state">
                <i class="fa-solid fa-basket-shopping"></i>
                <p>Order cart is empty.</p>
                <span style="font-size: 0.75rem; color: var(--text-muted);">Choose items from the food menu on the left.</span>
            </div>
        `;
        document.getElementById('cart-subtotal').textContent = '₹0';
        document.getElementById('cart-tax').textContent = '₹0';
        document.getElementById('cart-total').textContent = '₹0';
        const badgeCount = document.getElementById('mobile-cart-badge-count');
        const floatTotal = document.getElementById('mobile-cart-float-total');
        if (badgeCount) badgeCount.textContent = '0';
        if (floatTotal) floatTotal.textContent = '₹0';
        return;
    }

    let subtotal = 0;
    table.items.forEach(item => {
        const rowTotal = item.price * item.qty;
        subtotal += rowTotal;

        const row = document.createElement('div');
        row.className = 'cart-item-row';
        row.innerHTML = `
            <div class="cart-item-info">
                <p class="cart-item-name">${item.name}</p>
                <p class="cart-item-price-calc">₹${item.price} &times; ${item.qty}</p>
            </div>
            <div class="quantity-selector">
                <button class="quantity-btn" onclick="updateItemQuantity('${item.name}', -1)"><i class="fa-solid fa-minus"></i></button>
                <span class="quantity-val">${item.qty}</span>
                <button class="quantity-btn" onclick="updateItemQuantity('${item.name}', 1)"><i class="fa-solid fa-plus"></i></button>
            </div>
            <div class="cart-item-total">₹${rowTotal}</div>
        `;
        listContainer.appendChild(row);
    });

    // 5% GST calculation
    const tax = Math.round(subtotal * 0.05);
    const grandTotal = subtotal + tax;

    // Cache computed values on active table status
    table.itemsCount = table.items.reduce((sum, item) => sum + item.qty, 0);
    table.totalAmount = grandTotal;

    Storage.saveTables(g_tables);

    document.getElementById('cart-subtotal').textContent = `₹${subtotal}`;
    document.getElementById('cart-tax').textContent = `₹${tax}`;
    document.getElementById('cart-total').textContent = `₹${grandTotal}`;
    
    // Update floating mobile cart badge & total
    const badgeCount = document.getElementById('mobile-cart-badge-count');
    const floatTotal = document.getElementById('mobile-cart-float-total');
    if (badgeCount) badgeCount.textContent = table.itemsCount;
    if (floatTotal) floatTotal.textContent = `₹${grandTotal}`;
}

// Add item to active order
function addItemToOrder(name, price) {
    const table = g_tables.find(t => t.id === g_activeTableId);
    if (!table) return;

    if (table.status !== 'available' && table.status !== 'ordering') {
        showToast(`Table ${String(table.id).padStart(2, '0')} has a confirmed order. Release table first to take a new order.`, 'warning');
        return;
    }

    const item = FOOD_MENU.find(i => i.name === name);
    const activeSession = getActiveSessionByTime();
    
    // Strict session validation: Cannot add items outside active session
    if (item && item.timings && !item.timings.includes(activeSession)) {
        showUnavailableToast(name);
        return;
    }
    
    // Add item with qty 1
    table.items.push({ name, price, qty: 1 });
    
    // Update state
    renderCart();
    renderMenu();
    showToast(`Added ${name} to cart.`, 'success');
}

// Handle quantity changes
function updateItemQuantity(name, delta) {
    const table = g_tables.find(t => t.id === g_activeTableId);
    if (!table) return;

    if (table.status !== 'available' && table.status !== 'ordering') {
        showToast(`Table ${String(table.id).padStart(2, '0')} has a confirmed order and cannot be edited.`, 'warning');
        return;
    }

    const itemIndex = table.items.findIndex(i => i.name === name);

    if (itemIndex > -1) {
        if (delta > 0) {
            const item = FOOD_MENU.find(i => i.name === name);
            const activeSession = getActiveSessionByTime();
            if (item && item.timings && !item.timings.includes(activeSession)) {
                showUnavailableToast(name);
                return;
            }
        }

        table.items[itemIndex].qty += delta;

        if (table.items[itemIndex].qty <= 0) {
            table.items.splice(itemIndex, 1);
            showToast(`Removed ${name} from cart.`, 'info');
        }
    }

    renderCart();
    renderMenu();
}

// =========================================================================
// 9. ORDER REVIEW & CONFIRMATION CHECKOUT
// =========================================================================
function openReviewPage(table) {
    document.getElementById('rev-table-number').textContent = `Table ${String(table.id).padStart(2, '0')}`;
    document.getElementById('rev-order-id').textContent = table.currentOrderId;
    document.getElementById('rev-student-name').textContent = table.customerName;
    document.getElementById('rev-num-people').textContent = `${table.numPeople} ${table.numPeople > 1 ? 'People' : 'Person'}`;

    const startD = new Date(table.startTime);
    const optionsDate = { day: 'numeric', month: 'short', year: 'numeric' };
    document.getElementById('rev-date').textContent = startD.toLocaleDateString('en-GB', optionsDate);
    document.getElementById('rev-time').textContent = startD.toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit' });

    // Populate items list
    const tbody = document.getElementById('review-items-body');
    tbody.innerHTML = '';

    let subtotal = 0;
    table.items.forEach(item => {
        const itemTot = item.price * item.qty;
        subtotal += itemTot;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td class="text-center">₹${item.price}</td>
            <td class="text-center">&times; ${item.qty}</td>
            <td class="text-right font-bold">₹${itemTot}</td>
        `;
        tbody.appendChild(row);
    });

    const tax = Math.round(subtotal * 0.05);
    const grandTotal = subtotal + tax;

    document.getElementById('rev-subtotal').textContent = `₹${subtotal}`;
    document.getElementById('rev-tax').textContent = `₹${tax}`;
    document.getElementById('rev-total').textContent = `₹${grandTotal}`;

    showSection('review');
}

// Submit cart to Kitchen orders
function confirmOrderSubmission() {
    const table = g_tables.find(t => t.id === g_activeTableId);
    if (!table) return;

    if (table.status !== 'ordering' && table.status !== 'available') {
        showToast(`Order ${table.currentOrderId} is already confirmed and locked for Table ${String(table.id).padStart(2, '0')}.`, 'warning');
        generateInvoice(table.currentOrderId);
        return;
    }
    
    // Prepare order item statuses
    const kitchenItems = table.items.map(item => ({
        name: item.name,
        price: item.price,
        qty: item.qty,
        status: 'ordered' // ordered, preparing, ready, served
    }));

    const tax = Math.round(table.totalAmount - (table.totalAmount / 1.05)); // Exact tax from grand total
    const subtotal = table.totalAmount - tax;

    // Create order object
    const newOrder = {
        orderId: table.currentOrderId,
        tableId: table.id,
        customerName: table.customerName || 'Guest',
        numPeople: table.numPeople || 1,
        items: kitchenItems,
        subtotal: subtotal,
        tax: tax,
        discount: 0,
        total: table.totalAmount,
        status: 'placed', // placed, preparing, ready, delivered, paid
        createdAt: new Date().toISOString(),
        paymentStatus: 'pending'
    };

    // Save order
    g_orders.push(newOrder);
    Storage.saveOrders(g_orders);

    // Save order ID counter increments
    g_nextOrderIdCounter++;
    Storage.saveNextOrderId(g_nextOrderIdCounter);

    // Update table status to confirmed / sent to kitchen (LOCKED)
    table.status = 'placed'; // ORDER SENT TO KITCHEN / CONFIRMED
    table.itemsCount = kitchenItems.reduce((sum, item) => sum + item.qty, 0);
    // Retain table.items, table.currentOrderId, table.customerName, table.totalAmount for existing order viewing!
    Storage.saveTables(g_tables);

    showToast(`Order ${newOrder.orderId} confirmed and sent to Kitchen! Table ${String(table.id).padStart(2, '0')} is now locked.`, 'success');
    
    // Automatically advance active table pointer to Next Available Table (e.g. Table 1 -> Table 2 -> Table 3)
    selectNextAvailableTable();

    renderDashboard();
    showSection('kitchen');
}

// =========================================================================
// 10. KITCHEN ACTIONS & PREPARATION MANAGER
// =========================================================================
function renderKitchen() {
    const container = document.getElementById('kitchen-orders-container');
    const emptyState = document.getElementById('empty-kitchen-state');
    container.innerHTML = '';

    // Active preparation orders: Status not delivered, not paid
    const activeOrders = g_orders.filter(order => order.status !== 'delivered' && order.status !== 'paid');

    if (activeOrders.length === 0) {
        container.style.display = 'none';
        emptyState.style.display = 'flex';
        return;
    }

    container.style.display = 'grid';
    emptyState.style.display = 'none';

    activeOrders.forEach(order => {
        const card = document.createElement('div');
        card.className = 'kitchen-card';

        const createdD = new Date(order.createdAt);
        const timeStr = createdD.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

        let itemsHtml = '';
        order.items.forEach((item, index) => {
            let statusClass = `k-status-${item.status}`;
            let displayStatus = item.status;

            itemsHtml += `
                <div class="kitchen-item">
                    <span class="k-item-name">${item.name}</span>
                    <span class="k-item-qty">Qty: ${item.qty}</span>
                    <button class="kitchen-status-btn ${statusClass}" 
                        onclick="cycleKitchenItemStatus('${order.orderId}', ${index})"
                        ${item.status === 'served' ? 'disabled' : ''}>
                        ${displayStatus}
                    </button>
                </div>
            `;
        });

        card.innerHTML = `
            <div class="kitchen-card-header">
                <h3>Table ${String(order.tableId).padStart(2, '0')}</h3>
                <div class="kitchen-meta-group text-right">
                    <span class="font-bold text-purple">${order.orderId}</span>
                    <span>Time: ${timeStr}</span>
                </div>
            </div>
            <div class="kitchen-student-info">
                <span>Student / Guest:</span>
                <span>${order.customerName} (${order.numPeople} Pax)</span>
            </div>
            <div class="kitchen-items-list">
                ${itemsHtml}
            </div>
        `;

        container.appendChild(card);
    });
}

// Cycles items through state machine: ordered -> preparing -> ready -> served
function cycleKitchenItemStatus(orderId, itemIndex) {
    const order = g_orders.find(o => o.orderId === orderId);
    if (!order) return;

    const item = order.items[itemIndex];
    let nextStatus = 'ordered';

    if (item.status === 'ordered') {
        nextStatus = 'preparing';
        order.status = 'preparing';
        
        // Update active table state status
        const table = g_tables.find(t => t.id === order.tableId);
        if (table && table.currentOrderId === orderId) {
            table.status = 'preparing';
            Storage.saveTables(g_tables);
        }
    } else if (item.status === 'preparing') {
        nextStatus = 'ready';
        
        // If first ready or overall ready check
        let allReady = order.items.every(i => i.status === 'ready' || i.name === item.name); // simulated state check
        if (allReady) order.status = 'ready';
    } else if (item.status === 'ready') {
        nextStatus = 'served';
        showToast(`${item.name} served successfully.`, 'success');
    }

    item.status = nextStatus;

    // Check if order state has overall updates
    const allStatuses = order.items.map(i => i.status);
    
    // Overall Order status logic
    if (allStatuses.every(s => s === 'served')) {
        order.status = 'ready'; // ready for delivery checkout
        
        // Update table card details
        const table = g_tables.find(t => t.id === order.tableId);
        if (table && table.currentOrderId === orderId) {
            table.status = 'ready';
            Storage.saveTables(g_tables);
        }
        
        // Trigger Served Completion Page
        openServedCompletionPage(order);
    } else if (allStatuses.some(s => s === 'preparing')) {
        order.status = 'preparing';
    }

    Storage.saveOrders(g_orders);
    renderKitchen();
}

// Display completion celebration page
function openServedCompletionPage(order) {
    g_activeTableId = order.tableId; // Anchor active table context
    
    document.getElementById('served-table-display').textContent = `Table ${String(order.tableId).padStart(2, '0')}`;
    document.getElementById('served-order-display').textContent = order.orderId;
    document.getElementById('served-name-display').textContent = order.customerName;

    showSection('served');
}

// =========================================================================
// 11. INVOICING / BILL PAGE & PAYMENT
// =========================================================================
function generateInvoice(orderId) {
    const order = g_orders.find(o => o.orderId === orderId);
    if (!order) return;

    g_activeTableId = order.tableId; // Keep context

    document.getElementById('bill-order-id').textContent = order.orderId;
    document.getElementById('bill-table').textContent = `Table ${String(order.tableId).padStart(2, '0')}`;
    document.getElementById('bill-student-name').textContent = order.customerName;

    const startD = new Date(order.createdAt);
    document.getElementById('bill-datetime').textContent = startD.toLocaleString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
    document.getElementById('bill-print-timestamp').textContent = new Date().toLocaleString();

    // Populate billing table
    const tbody = document.getElementById('bill-items-body');
    tbody.innerHTML = '';

    order.items.forEach(item => {
        const itemTot = item.price * item.qty;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td class="text-center">${item.qty}</td>
            <td class="text-right">₹${item.price}</td>
            <td class="text-right">₹${itemTot}</td>
        `;
        tbody.appendChild(row);
    });

    document.getElementById('bill-subtotal').textContent = `₹${order.subtotal}`;
    document.getElementById('bill-tax').textContent = `₹${order.tax}`;
    document.getElementById('bill-discount').textContent = `-₹${order.discount}`;
    document.getElementById('bill-grand-total').textContent = `₹${order.total}`;

    // Adjust Payment status badges and Action buttons
    const badge = document.getElementById('bill-payment-status');
    const payBtn = document.getElementById('btn-bill-pay');
    const deliverBtn = document.getElementById('btn-bill-deliver');

    if (order.paymentStatus === 'paid') {
        badge.className = 'badge badge-success';
        badge.textContent = 'PAID';
        payBtn.classList.add('hidden');
    } else {
        badge.className = 'badge badge-danger';
        badge.textContent = 'PENDING';
        payBtn.classList.remove('hidden');
    }

    // Always keep Deliver & Release Table accessible for active table orders
    if (deliverBtn) deliverBtn.classList.remove('hidden');

    // Refresh Lifecycle Progress Tracker
    updateLifecycleTracker(order);

    showSection('bill');
}

// Updates invoice visual steps
function updateLifecycleTracker(order) {
    const steps = ['placed', 'preparing', 'ready', 'delivered', 'paid'];
    let currentStepIndex = steps.indexOf(order.status);
    
    if (order.paymentStatus === 'paid') {
        currentStepIndex = steps.indexOf('paid');
    }

    steps.forEach((step, idx) => {
        const stepEl = document.getElementById(`step-${step}`);
        if (idx <= currentStepIndex) {
            stepEl.className = 'tracker-step active';
            if (idx === currentStepIndex && step === 'paid') {
                stepEl.className = 'tracker-step complete';
            }
        } else {
            stepEl.className = 'tracker-step';
        }

        // Lines shading
        const line = document.getElementById(`line-${idx}`);
        if (line) {
            if (idx < currentStepIndex) {
                line.className = 'tracker-line active';
                if (currentStepIndex === 4 && idx === 3) {
                    line.className = 'tracker-line complete';
                }
            } else {
                line.className = 'tracker-line';
            }
        }
    });
}

// Mark billing status as Paid
function markOrderPaid(orderId) {
    const order = g_orders.find(o => o.orderId === orderId);
    if (!order) return;

    order.paymentStatus = 'paid';
    
    // Automatically transition order status to delivered if paid
    if (order.status === 'ready') {
        order.status = 'delivered';
    }

    Storage.saveOrders(g_orders);
    showToast(`Order ${orderId} marked as Paid!`, 'success');

    // Update active table reference status
    const table = g_tables.find(t => t.id === order.tableId);
    if (table && table.currentOrderId === orderId) {
        table.status = 'delivered';
        Storage.saveTables(g_tables);
    }

    generateInvoice(orderId); // Refresh view
}

// Explicitly release a table and make it AVAILABLE again
function releaseTable(tableId) {
    const table = g_tables.find(t => t.id === tableId);
    if (!table) return;

    const orderId = table.currentOrderId;
    if (orderId) {
        const order = g_orders.find(o => o.orderId === orderId);
        if (order) {
            order.status = 'delivered';
            if (order.paymentStatus !== 'paid') {
                order.paymentStatus = 'paid';
            }
            Storage.saveOrders(g_orders);
        }
    }

    // Reset table variables to initial Available state
    table.status = 'available';
    table.currentOrderId = null;
    table.customerName = null;
    table.numPeople = null;
    table.items = [];
    table.itemsCount = 0;
    table.totalAmount = 0;
    table.startTime = null;
    
    Storage.saveTables(g_tables);

    showToast(`Table ${String(tableId).padStart(2, '0')} released! Status is now AVAILABLE.`, 'success');
    renderDashboard();
    showSection('dashboard');
}

// Mark order delivered and release the Table
function markOrderDelivered(orderId) {
    const order = g_orders.find(o => o.orderId === orderId);
    if (order) {
        releaseTable(order.tableId);
    }
}

// =========================================================================
// 12. ORDER HISTORY LOG & FILTERING
// =========================================================================
function renderHistory() {
    const tbody = document.getElementById('history-table-body');
    const emptyState = document.getElementById('empty-history-state');
    tbody.innerHTML = '';

    // Search and filter inputs
    const query = document.getElementById('history-search').value.toLowerCase().trim();
    const tableFilter = document.getElementById('history-filter-table').value;
    const statusFilter = document.getElementById('history-filter-status').value;
    const dateFilter = document.getElementById('history-filter-date').value;

    const filteredOrders = g_orders.filter(order => {
        // Table filter check
        if (tableFilter !== 'all' && order.tableId !== parseInt(tableFilter)) return false;
        
        // Status filter check
        if (statusFilter !== 'all') {
            if (statusFilter === 'paid') {
                if (order.paymentStatus !== 'paid') return false;
            } else {
                if (order.status !== statusFilter) return false;
            }
        }

        // Date filter check
        if (dateFilter) {
            const orderDateStr = new Date(order.createdAt).toISOString().split('T')[0];
            if (orderDateStr !== dateFilter) return false;
        }

        // Search check (Order ID, Student Name)
        if (query) {
            const idMatch = order.orderId.toLowerCase().includes(query);
            const nameMatch = order.customerName.toLowerCase().includes(query);
            if (!idMatch && !nameMatch) return false;
        }

        return true;
    });

    // Sort order list descending (newest first)
    filteredOrders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    if (filteredOrders.length === 0) {
        emptyState.classList.remove('hidden');
        return;
    }
    emptyState.classList.add('hidden');

    filteredOrders.forEach(order => {
        const tr = document.createElement('tr');
        
        const createdD = new Date(order.createdAt);
        const datetimeStr = createdD.toLocaleString('en-GB', { 
            day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' 
        });

        const totalItems = order.items.reduce((sum, item) => sum + item.qty, 0);

        let statusClass = 'status-available';
        if (order.status === 'preparing') statusClass = 'status-preparing';
        else if (order.status === 'ready') statusClass = 'status-ready';
        else if (order.status === 'delivered') statusClass = 'status-delivered';

        let payClass = order.paymentStatus === 'paid' ? 'status-available' : 'status-preparing';

        tr.innerHTML = `
            <td class="font-bold text-purple">${order.orderId}</td>
            <td class="font-bold">Table ${String(order.tableId).padStart(2, '0')}</td>
            <td>${order.customerName}</td>
            <td>${datetimeStr}</td>
            <td class="text-center">${totalItems} Items</td>
            <td class="text-right font-bold">₹${order.total}</td>
            <td class="text-center"><span class="status-badge-inline ${statusClass}">${order.status}</span></td>
            <td class="text-center"><span class="status-badge-inline ${payClass}">${order.paymentStatus}</span></td>
            <td class="text-right">
                <button class="btn btn-purple btn-icon-only" title="View Bill/Invoice" onclick="generateInvoice('${order.orderId}')">
                    <i class="fa-solid fa-file-invoice"></i>
                </button>
            </td>
        `;

        tbody.appendChild(tr);
    });
}

// =========================================================================
// 13. GENERATE UNIQUE ORDER ID HELPER
// =========================================================================
function generateNewOrderId() {
    // Counter format: #ORD-001, #ORD-002...
    const padded = String(g_nextOrderIdCounter).padStart(3, '0');
    return `#ORD-${padded}`;
}

function formatTimeStr(date) {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
}

// =========================================================================
// 14. SYSTEM RESET & DATA CONTROLLERS
// =========================================================================

// Reset all 10 tables to available
function resetTables() {
    openConfirmModal(
        'Reset Tables Data',
        'Are you sure? All 10 tables will be reset to Available status and active carts will be cleared.',
        true,
        () => {
            g_tables = JSON.parse(JSON.stringify(DEFAULT_TABLES));
            Storage.saveTables(g_tables);
            localStorage.removeItem('tables');
            renderDashboard();
            closeConfirmModal();
            showToast('All tables reset to Available successfully!', 'success');
        }
    );
}

// Reset tables alias (resetData)
function resetData() {
    resetTables();
}

// Reset past orders history and counter
function resetOrders() {
    openConfirmModal(
        'Reset Order History',
        'Are you sure? All past order history records will be deleted and the Order ID counter will reset to #ORD-001.',
        true,
        () => {
            g_orders = [];
            g_nextOrderIdCounter = 1;
            Storage.saveOrders(g_orders);
            Storage.saveNextOrderId(1);
            localStorage.removeItem('orders');
            renderHistory();
            renderDashboard();
            closeConfirmModal();
            showToast('All order history reset successfully!', 'success');
        }
    );
}

// Full System Reset
function fullReset() {
    openConfirmModal(
        'Full System Reset',
        'WARNING: This will wipe all tables, orders, counters, and session data, returning HostelBite to a fresh state.',
        true,
        () => {
            localStorage.clear();
            sessionStorage.clear();
            
            g_tables = JSON.parse(JSON.stringify(DEFAULT_TABLES));
            g_orders = [];
            g_nextOrderIdCounter = 1;

            Storage.saveTables(g_tables);
            Storage.saveOrders(g_orders);
            Storage.saveNextOrderId(1);

            closeConfirmModal();
            showToast('System Reset Completed. Re-initializing...', 'success');
            
            setTimeout(() => {
                location.reload();
            }, 1000);
        }
    );
}

// Dynamic Background Theme Image Switcher
function changeAppBg(bgImgPath) {
    const appShell = document.getElementById('app-shell');
    if (appShell) {
        appShell.style.backgroundImage = `linear-gradient(rgba(8, 6, 12, 0.86), rgba(8, 6, 12, 0.93)), url('${bgImgPath}')`;
        localStorage.setItem('hb_bg_image', bgImgPath);
        showToast('App background theme image updated!', 'success');
    }
}

// On page load, apply stored background if available
document.addEventListener('DOMContentLoaded', () => {
    const savedBg = localStorage.getItem('hb_bg_image');
    if (savedBg) {
        const appShell = document.getElementById('app-shell');
        if (appShell) {
            appShell.style.backgroundImage = `linear-gradient(rgba(8, 6, 12, 0.86), rgba(8, 6, 12, 0.93)), url('${savedBg}')`;
        }
    }
});

// Expose functions globally to window for HTML inline onclick handlers
window.resetData = resetData;
window.resetTables = resetTables;
window.resetOrders = resetOrders;
window.fullReset = fullReset;
window.changeAppBg = changeAppBg;
