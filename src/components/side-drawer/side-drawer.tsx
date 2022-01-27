import { Component, h, Prop } from '@stencil/core';

@Component({
  tag:'uc-side-drawer',
  styleUrl: './side-drawer.css',
  shadow: true
})
export class SideDrawer {

  @Prop({reflect: true}) titles: string;
  @Prop({reflect: true, mutable: true}) open: boolean;

  onCloseDrawer() {
    this.open = false;
  }

  onContentChange(content: string) {

console.log('content', content);

  }

  render() {
    let mainContent = <slot></slot>;

    mainContent = (
      <div id="contact-information">
        <h2>Contact Information</h2>
        <p>You can reach u via phone or email</p>
        <ul>
          <li>
            Phone: 978534213
          </li>
          <li>
            Email: <a href="mailto:something@something.com">something@something.com</a>
          </li>
        </ul>
      </div>
    )
    // let content = null;
    // if (this.open) {
    //   content = (
    //     <aside>
    //       <header>
    //         <h1>{this.title}</h1>
    //       </header>
    //       <main>
    //         <slot></slot>
    //       </main>
    //     </aside>
    //   );
    // }

    return (
      <aside>
        <header>
          <h1>{this.titles}</h1>
          <button onClick={() => this.onCloseDrawer()}>X</button>
        </header>
        <section class="tabs">
          <button class="active" onClick={this.onContentChange.bind(this, 'nav')}>Navigation</button>
          <button onClick={this.onContentChange.bind(this, 'contact')}>Contac</button>
        </section>
        <main>
          {mainContent}
          {/* <slot></slot> */}
        </main>
      </aside>
    );
  }
}
