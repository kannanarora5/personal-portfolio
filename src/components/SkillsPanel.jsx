import React from 'react'
import styles from './panels.module.css'

// Helper to render coloured JSON-like syntax
function K({ children }) { return <span className={styles.jKey}>"{children}"</span> }
function S({ children }) { return <span className={styles.jStr}>"{children}"</span> }
function Bool({ v }) { return <span style={{color:'var(--blue2)'}}>{v}</span> }
function Brace({ children }) { return <span className={styles.jBrace}>{children}</span> }
function Comma() { return <span className={styles.jComma}>,</span> }

export default function SkillsPanel() {
  return (
    <div className={styles.skillsPanel}>
      <div className={styles.panelTitle}>stack.json</div>
      <div className={styles.jsonView}>
<Brace>{'{'}</Brace>{'\n'}
{'  '}<K>languages</K><Brace>: [</Brace><S>Java</S><Comma /> <S>Python</S><Comma /> <S>JavaScript</S><Comma /> <S>SQL</S><Comma /> <S>Bash</S><Brace>]</Brace><Comma />{'\n'}
{'\n'}
{'  '}<K>cloud_and_devops</K><Brace>: {'{'}</Brace>{'\n'}
{'    '}<K>aws</K><Brace>: [</Brace><S>EC2</S><Comma /> <S>S3</S><Comma /> <S>Lambda</S><Comma /> <S>DynamoDB</S><Comma /> <S>API Gateway</S><Comma /> <S>CloudWatch</S><Brace>]</Brace><Comma />{'\n'}
{'    '}<K>containers</K><Brace>: [</Brace><S>Docker</S><Brace>]</Brace><Comma />{'\n'}
{'    '}<K>ci_cd</K><Brace>: [</Brace><S>GitHub Actions</S><Brace>]</Brace><Comma />{'\n'}
{'    '}<K>os</K><Brace>: [</Brace><S>Linux</S><Brace>]</Brace>{'\n'}
{'  '}<Brace>{'}'}</Brace><Comma />{'\n'}
{'\n'}
{'  '}<K>backend_and_data</K><Brace>: {'{'}</Brace>{'\n'}
{'    '}<K>frameworks</K><Brace>: [</Brace><S>Spring Boot</S><Brace>]</Brace><Comma />{'\n'}
{'    '}<K>databases</K><Brace>: [</Brace><S>MySQL</S><Comma /> <S>PostgreSQL</S><Comma /> <S>SQLite</S><Comma /> <S>DynamoDB</S><Brace>]</Brace><Comma />{'\n'}
{'    '}<K>patterns</K><Brace>: [</Brace><S>REST APIs</S><Comma /> <S>OOP</S><Comma /> <S>MVC</S><Comma /> <S>Design Patterns</S><Brace>]</Brace>{'\n'}
{'  '}<Brace>{'}'}</Brace><Comma />{'\n'}
{'\n'}
{'  '}<K>machine_learning</K><Brace>: [</Brace>{'\n'}
{'    '}<S>scikit-learn</S><Comma /> <S>ML Pipelines</S><Comma />{'\n'}
{'    '}<S>Data Cleaning</S><Comma /> <S>Model Evaluation</S><Comma /> <S>Class Balancing</S>{'\n'}
{'  '}<Brace>]</Brace><Comma />{'\n'}
{'\n'}
{'  '}<K>practices</K><Brace>: [</Brace>{'\n'}
{'    '}<S>Agile/Scrum</S><Comma /> <S>Unit Testing</S><Comma /> <S>Integration Testing</S><Comma />{'\n'}
{'    '}<S>UAT</S><Comma /> <S>Code Review</S><Comma /> <S>Documentation</S>{'\n'}
{'  '}<Brace>]</Brace><Comma />{'\n'}
{'\n'}
{'  '}<K>interests</K><Brace>: [</Brace><S>Applied ML</S><Comma /> <S>NLP & networks</S><Comma /> <S>Cloud backends</S><Comma /> <S>Game dev</S><Brace>]</Brace><Comma />{'\n'}
{'\n'}
{'  '}<K>currently_learning</K><Brace>: [</Brace><S>TypeScript</S><Comma /> <S>System Design</S><Comma /> <S>TensorFlow</S><Brace>]</Brace><Comma />{'\n'}
{'\n'}
{'  '}<K>available</K><Brace>: </Brace><Bool v="true" /><Comma />{'\n'}
{'  '}<K>open_to</K><Brace>: [</Brace><S>SWE</S><Comma /> <S>ML/AI</S><Comma /> <S>Cloud</S><Comma /> <S>Data</S><Brace>]</Brace>{'\n'}
<Brace>{'}'}</Brace>
      </div>
    </div>
  )
}
