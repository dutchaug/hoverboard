class HomePage {
  beforeRegister() {
    this.is = 'home-page';
    this.properties = {
      selectedInfo: Number,
      video: {
        type: Object,
        value: {
          youtubeId: 'JiLYsYvCs-A'
        }
      },
      mailchimp: {
        type: Object,
        value: {
          name: 'b_9fc8aa205b0521b5f05fc8e1e_ae0fb459fc',
          action: '//dutchaug.us6.list-manage.com/subscribe?u=00dd8d0a15bf77f68bd75d643&id=3ce443d9a5'
        }
      }
    };
  }

  ready() {
    this.selectedInfo = 0;
    window.clearInterval(_cycleBlocksInterval);
    var _cycleBlocksInterval = window.setInterval(function () {
      this.$.blocks.selectNext();
    }.bind(this), 4000);
  }

  openVideoDialog() {
    this.$.videoDialog.open();
  }

  subscribe() {
    this.$.subscribeForm.submit();
    this.closeSubscribeForm();
  }

  openSubscribeForm() {
    if (window.innerWidth < 960) {
      this.$.subscribeDialog.open();
    } else {
      this.selectedInfo = 1;
    }
  }

  closeSubscribeForm() {
    this.selectedInfo = 0;
  }
}

Polymer(HomePage);
