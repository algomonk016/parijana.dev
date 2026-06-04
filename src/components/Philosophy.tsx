export function Philosophy() {
  return (
    <section className="philosophy" id="philosophy" aria-labelledby="philosophy-quote">
      <div className="container">
        <div className="philosophy__inner">
          <div className="philosophy__mark reveal-fade" aria-hidden="true">&ldquo;</div>
          <blockquote className="philosophy__quote reveal-slide" id="philosophy-quote">
            Technology is most powerful when it amplifies human capability without asking to be noticed.
          </blockquote>
          <cite className="philosophy__cite reveal-fade" data-delay="200">
            &mdash; Shivesh Tiwari
          </cite>
        </div>
      </div>
    </section>
  )
}
