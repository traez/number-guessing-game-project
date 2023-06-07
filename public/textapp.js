{array2.map((item, index) => (
<div className="projects" key={index}>
<div className="project-id">
  <h2>{item.name}</h2>
  <img
    src="./images/project-icon.png"
    className="project-icon"
    alt=""
  />
</div>
<h3>{item.info}</h3>
<div className="project-links">
  <img
    src="./images/github-icon.png"
    className="github-icon"
    alt=""
  />
  <h4>
    <a
      href="{item.repo}"
      target="_blank"
    >
      Visit Repository
    </a>
  </h4>
  <h4>
    <a
      href="{item.live}"
      target="_blank"
    >
      Live Site
    </a>
  </h4>
</div>
</div>
))}


