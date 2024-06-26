const EDUCATION_ICONS = [
    'book',
    'bookmark',
    'bookmarks',
    'document',
    'document-attach',
    'document-text',
    'documents',
    'journal',
    'library',
    'newspaper',
    'pencil',
    'shapes',
    'school',
    'tablet-landscape',
    'tablet-portrait',
    'telescope',
    'trophy',
];
const RELAX_ENTERTAINMENT_ICONS = [
    'bed',
    'film',
    'moon',
    'pause',
    'pause-circle',
    'reader',
    'snow',
    'sunny',
    'umbrella',
    'albums',
    'american-football',
    'basketball',
    'game-controller',
    'gift',
    'headset',
    'megaphone',
    'musical-note',
    'musical-notes',
    'play',
    'rocket',
    'trophy',
    'videocam',
];
const FINANCE_ICONS = [
    'cash',
    'calculator',
    'wallet',
    'pricetag',
    'briefcase',
    'card',
    'trending-down',
    'trending-up',
    'stats-chart',
];
const TRANSPORT_ICONS = ['airplane', 'bicycle', 'bus', 'car', 'car-sport', 'boat', 'subway', 'train'];
const SHOPPING_ICONS = [
    'bag',
    'bag-add',
    'bag-remove',
    'cart',
    'pricetag',
    'pricetags',
    'cash',
    'wallet',
    'barcode',
    'basket',
    'basketball',
    'gift',
    'gift-outline',
];
const FOOD_ICONS = ['fast-food', 'pizza', 'beer', 'wine'];
const HOME_ICONS = ['home', 'bed', 'alarm', 'key', 'lock-closed', 'lock-open', 'power', 'wifi', 'battery-full'];
const HEALTH_ICONS = [
    'heart',
    'heart-circle',
    'heart-dislike',
    'heart-half',
    'medkit',
    'pulse',
    'medal',
    'fitness',
    'nutrition',
    'thermometer',
    'bandage',
    'body',
    'eyedrop',
    'finger-print',
    'flask',
    'help-buoy',
    'leaf',
    'medical',
    'server',
    'settings',
    'shield',
    'shield-checkmark',
];

const TRAVEL_ICONS = ['airplane', 'bus', 'car', 'boat', 'subway', 'train'];

export interface IconsByCategory {
    [category: string]: {
        label: string;
        icons: string[];
    };
}

export const ICONS_BY_CATEGORY: IconsByCategory = {
    Home: {
        label: 'Hogar',
        icons: HOME_ICONS,
    },
    Food: {
        label: 'Comida',
        icons: FOOD_ICONS,
    },
    Education: {
        label: 'Educación',
        icons: EDUCATION_ICONS,
    },
    RelaxAndEntertainment: {
        label: 'Entretenimiento',
        icons: RELAX_ENTERTAINMENT_ICONS,
    },
    Finance: {
        label: 'Finanzas',
        icons: FINANCE_ICONS,
    },
    Health: {
        label: 'Salud',
        icons: HEALTH_ICONS,
    },
    Shopping: {
        label: 'Shopping',
        icons: SHOPPING_ICONS,
    },
    Transport: {
        label: 'Transporte',
        icons: TRANSPORT_ICONS,
    },
    Travel: {
        label: 'Viaje',
        icons: TRAVEL_ICONS,
    },
};

export const ICONS = [
    'airplane',
    'alarm',
    'albums',
    'american-football',
    'bag',
    'bag-add',
    'bag-remove',
    'balloon',
    'ban',
    'baseball',
    'basket',
    'basketball',
    'beaker',
    'bed',
    'beer',
    'bicycle',
    'bluetooth',
    'boat',
    'body',
    'bonfire',
    'book',
    'bookmark',
    'bookmarks',
    'bowling-ball',
    'briefcase',
    'browsers',
    'brush',
    'bug',
    'build',
    'bulb',
    'bus',
    'business',
    'cafe',
    'calculator',
    'calendar',
    'calendar-clear',
    'calendar-number',
    'call',
    'camera',
    'camera-reverse',
    'car',
    'car-sport',
    'card',
    'caret-back',
    'caret-back-circle',
    'caret-down',
    'caret-down-circle',
    'caret-forward',
    'caret-forward-circle',
    'caret-up',
    'caret-up-circle',
    'cart',
    'cash',
    'cellular',
    'chatbox',
    'chatbox-ellipses',
    'chatbubble',
    'chatbubble-ellipses',
    'chatbubbles',
    'cloud',
    'code',
    'code-download',
    'code-slash',
    'code-working',
    'cog',
    'color-fill',
    'color-filter',
    'color-palette',
    'color-wand',
    'compass',
    'construct',
    'contract',
    'contrast',
    'copy',
    'create',
    'crop',
    'cube',
    'cut',
    'desktop',
    'disc',
    'document',
    'document-attach',
    'document-text',
    'documents',
    'download',
    'duplicate',
    'ear',
    'earth',
    'easel',
    'egg',
    'ellipse',
    'ellipsis-horizontal',
    'ellipsis-vertical',
    'enter',
    'exit',
    'expand',
    'extension-puzzle',
    'eye',
    'eye-off',
    'eyedrop',
    'fast-food',
    'female',
    'file-tray',
    'file-tray-full',
    'file-tray-stacked',
    'film',
    'filter',
    'finger-print',
    'fish',
    'fitness',
    'flag',
    'flame',
    'flash',
    'flash-off',
    'flashlight',
    'flask',
    'flower',
    'folder',
    'folder-open',
    'football',
    'funnel',
    'game-controller',
    'gift',
    'git-branch',
    'git-commit',
    'git-compare',
    'git-merge',
    'git-network',
    'git-pull-request',
    'glasses',
    'globe',
    'golf',
    'grid',
    'hammer',
    'hand-left',
    'hand-right',
    'happy',
    'hardware-chip',
    'headset',
    'heart',
    'heart-circle',
    'heart-dislike',
    'heart-half',
    'help',
    'help-buoy',
    'help-circle',
    'home',
    'hourglass',
    'ice-cream',
    'image',
    'images',
    'infinite',
    'information',
    'invert-mode',
    'journal',
    'key',
    'keypad',
    'language',
    'laptop',
    'layers',
    'leaf',
    'library',
    'link',
    'list',
    'list-circle',
    'locate',
    'location',
    'lock-closed',
    'lock-open',
    'log-in',
    'log-out',
    'magnet',
    'mail',
    'male',
    'man',
    'map',
    'medal',
    'medical',
    'medkit',
    'megaphone',
    'menu',
    'mic',
    'mic-circle',
    'mic-off-circle',
    'mic-off-outline',
    'mic-outline',
    'moon',
    'move',
    'musical-note',
    'musical-notes',
    'navigate',
    'newspaper',
    'notifications',
    'notifications-circle',
    'notifications-off',
    'nuclear',
    'nutrition',
    'open',
    'options',
    'paper-plane',
    'partly-sunny',
    'pause',
    'pause-circle',
    'paw',
    'pencil',
    'people',
    'people-circle',
    'person',
    'person-add',
    'person-circle',
    'person-outline',
    'person-remove',
    'phone-landscape',
    'phone-portrait',
    'pin',
    'pint',
    'pizza',
    'planet',
    'play',
    'power',
    'pricetag',
    'pricetags',
    'print',
    'pulse',
    'push',
    'qr-code',
    'radio-button-off',
    'radio-button-on',
    'rainy',
    'reader',
    'receipt',
    'recording',
    'refresh',
    'refresh-circle',
    'reload',
    'reload-circle',
    'remove',
    'remove-circle',
    'reorder-four',
    'reorder-three',
    'reorder-two',
    'repeat',
    'resize',
    'return-down-back',
    'return-down-forward',
    'return-up-back',
    'return-up-forward',
    'ribbon',
    'rocket',
    'rose',
    'sad',
    'save',
    'scan',
    'scan-circle',
    'scan-outline',
    'school',
    'search',
    'search-circle',
    'send',
    'server',
    'settings',
    'shapes',
    'share',
    'share-social',
    'shield',
    'shield-checkmark',
    'shirt',
    'shuffle',
    'skull',
    'snow',
    'speedometer',
    'square',
    'star',
    'star-half',
    'stats-chart',
    'stop',
    'stopwatch',
    'subway',
    'sunny',
    'swap-horizontal',
    'swap-vertical',
    'sync',
    'sync-circle',
    'sync-outline',
    'tablet-landscape',
    'tablet-portrait',
    'telescope',
    'tennisball',
    'terminal',
    'text',
    'thermometer',
    'thumbs-down',
    'thumbs-up',
    'thunderstorm',
    'time',
    'timer',
    'today',
    'toggle',
    'trail-sign',
    'train',
    'transgender',
    'trash',
    'trash-bin',
    'trending-down',
    'trending-up',
    'triangle',
    'trophy',
    'tv',
    'umbrella',
    'unlink',
    'videocam',
    'volume-high',
    'volume-low',
    'volume-medium',
    'volume-mute',
    'wallet',
    'warning',
    'watch',
    'water',
    'wifi',
    'wine',
    'woman',
];
