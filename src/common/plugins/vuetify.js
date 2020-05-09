import Vue from 'vue';
import Vuetify, { VApp, VBtn } from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css' 

Vue.use(Vuetify, {
  components: {
    VApp,
    VBtn
  }
});

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    dark: false,
    themes: {
      light: {
        // colors from mew components
        primaryHover: '#1eb19b',
        primaryActive: '#56c5b4',
        primaryOutlineActive: '#baede6',
        secondaryOutlineActive: '#d6dffa',
        errorOutlineActive: '#ffd7dc',
        basicOutlineActive: '#c5ccd3',
        selectActive: '#dcfff9',
        selectHover: '#f0f0f0',
        superPrimary: '#f2fafa',
        superPrimaryHover: '#f5fdfb',
        inputBorder: '#e0e0e0',
        inputDisabled: '#cecece',
        dropdownBorder: '#05c0a5',
        progressBar: '#F3FAFA',
        txIn: '#7895f2',
        txOut: '#ffaf8f',
        swap: '#7fdefb',
        swapDisable: '#f8f8f8',
        captionPrimary: '#a9bcd2',
        textSecondary: '#999999',
        inputLabel: '#6d89a6',
        searchInput: '#f2f4fa',
        searchText: '#96a8b6',
        titlePrimary: '#0b2840',
        textPrimary: '#667f9b',
        white: '#ffffff',
        expandHeader: '#184f90',
        primary: '#05c0a5',
        secondary: '#5a78f0',
        basic: '#0b1a40',
        success: '#2cc479',
        error: '#ff445b',
        warning: {
          base: '#FFF2DC',
          darken1: '#f5a623'
        },
        disabled: '#cecece',
        // end of colors from mew components
        black: '#000000',
        emerald: '#05c0a5',
        royal_blue: '#5a78f0',
        dark_sacramento: '#003945',
        dark_space: '#0b2840',
        violet: '#7070e3',
        police_strobe: '#25b0e8',
        independence: '#536d8b',
        dark_independence: '#334758',
        cerise: '#e96071',
        cardinal: '#a70015',
        naples_yellow: '#fcb755',
        primary_silver: '#f2f4fa',
        mint: '#cdf2ee',
        light_mint: '#f2fafa',
        light_red: '#e96071',
        spruce: '#506175',
        silver: '#cecece',
        gray1: '#96a8b6',
        gray2: '#4d687e',
        gray3: '#ececec',
        gray4: '#6d89a6',
        text_default: '#0b2840',
        text_warning: '#ff9800',
        bg_warning: '#fffde7',
        bg_sidemenu: '#002747',
        bg_overlay: '#f2fafa',
        bg_white_sheet: '#ffffff',
        bg_wallet: '#f2f4fa',
        bg_table: '#f9f9f9',
        bg_notification_in: '#f2fafa',
        bg_notification_out: '#ffebee',
        bg_notification_swap: '#fff6e3',
        bg_notification_button_in: '#7895f2',
        bg_notification_button_out: '#ffaf8f',
        bg_notification_button_swap: '#7fdefb'
      },
      dark: {
        // colors from mew components
        primaryHover: '#1eb19b',
        primaryActive: '#56c5b4',
        primaryOutlineHover: '#03292c',
        primaryOutlineActive: '#15796a',
        secondaryOutlineHover: '#182040',
        secondaryOutlineActive: '#2e3c75',
        errorOutlineHover: '#361317',
        errorOutlineActive: '#651f28',
        basicOutlineHover: '#1e2a3e',
        basicOutlineActive: '#3d4e6b',
        selectActive: '#2e3c75',
        selectHover: '#2c3448',
        superPrimary: '#f2fafa',
        superPrimaryHover: '#f5fdfb',
        inputBorder: '#667f9b',
        inputDisabled: '#3A465D',
        dropdownBorder: '#7e90a7',
        progressBar: '#151A29',
        txIn: '#7895f2',
        txOut: '#ffaf8f',
        swap: '#0f1320',
        swapDisable: '#0f1320',
        captionPrimary: '#a9bcd2',
        textSecondary: '#999999',
        inputLabel: '#4e5a6e',
        searchInput: '#f2f4fa',
        searchText: '#96a8b6',
        white: '#fff',
        expandHeader: '#184f90',
        titlePrimary: '#95aed8',
        textPrimary: '#4e5a6e',
        primary: '#05c0a5',
        secondary: '#5c79f0',
        basic: '#151A29',
        success: '#2cc479',
        error: '#ff445b',
        warning: {
          base: '#FFF2DC',
          darken1: '#f5a623'
        },
        disabled: '#1f2b42',
        // end of colors from mew components
        black: '#000000',
        emerald: '#05c0a5',
        royal_blue: '#5a78f0',
        dark_sacramento: '#003945',
        dark_space: '#0b2840',
        violet: '#7070e3',
        police_strobe: '#25b0e8',
        independence: '#536d8b',
        dark_independence: '#334758',
        cerise: '#e96071',
        cardinal: '#a70015',
        naples_yellow: '#fcb755',
        primary_silver: '#f2f4fa',
        mint: '#cdf2ee',
        light_mint: '#f2fafa',
        light_red: '#e96071',
        spruce: '#506175',
        silver: '#cecece',
        gray1: '#96a8b6',
        gray2: '#4d687e',
        gray3: '#ececec',
        gray4: '#6d89a6',
        text_default: '#95aed8',
        text_warning: '#ff9800',
        bg_warning: '#fffde7',
        bg_sidemenu: '#0d111e',
        bg_overlay: '#151a29',
        bg_white_sheet: '#151a29',
        bg_wallet: '#151a29',
        bg_table: '#0f1320',
        bg_notification_in: '#0f1320',
        bg_notification_out: '#0f1320',
        bg_notification_swap: '#0f1320',
        bg_notification_button_in: '#7895f2',
        bg_notification_button_out: '#ffaf8f',
        bg_notification_button_swap: '#7fdefb'
      }
    }
  }
});
