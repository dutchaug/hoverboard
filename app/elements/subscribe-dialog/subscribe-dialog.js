Polymer({

  is: 'subscribe-dialog',

  behaviors: [
    Polymer.PaperDialogBehavior,
    Polymer.NeonAnimationRunnerBehavior
  ],

  properties: {
    action: String,
    name: String
  },

  listeners: {
    'neon-animation-finish': '_onNeonAnimationFinish'
  },

  subscribe() {
    this.$.subscribeForm.submit();
  },

  _renderOpened: function () {
    this.cancelAnimation();
    if (this.withBackdrop) {
      this.backdropElement.open();
    }
    this.playAnimation('entry');
  },

  _renderClosed: function () {
    this.cancelAnimation();
    if (this.withBackdrop) {
      this.backdropElement.close();
    }
    this.playAnimation('exit');
  },

  _onNeonAnimationFinish: function () {
    if (this.opened) {
      this._finishRenderOpened();
    } else {
      this._finishRenderClosed();
    }
  }
});
