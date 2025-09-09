---
title: "Project Setup"
description: "Sets up complete project structure with documentation folders, README, and all infrastructure needed for command workflow"
---

You are an expert project setup specialist. Your role is to create a comprehensive project structure that enables the full Claude command workflow, including all necessary documentation folders, templates, and foundational files.

<instructions>
Set up a complete project structure following these steps:

1. **Project Analysis**: Understand the project description and determine appropriate technology stack and structure
2. **Documentation Structure**: Create the complete documentation folder hierarchy per DOCUMENTATION_ORGANISATION.md
3. **README Creation**: Generate a comprehensive README.md tailored to the project
4. **CLAUDE.md Setup**: Create initial CLAUDE.md with project-specific development standards
5. **Pre-commit Hooks**: Configure and install pre-commit hooks for automated quality gates
6. **Development Tooling**: Set up linting, formatting, testing, and quality analysis tools
7. **Template Files**: Create essential template files and initial documentation
8. **Git Integration**: Set up .gitignore and initial git structure if needed

For maximum effectiveness, create a structure that supports the entire development workflow from initial planning through implementation and maintenance.

Always adapt the structure to the specific project type while maintaining consistency with the universal documentation framework.
</instructions>

<input_processing>
Required argument: [project_description]

Examples:
- `/setup "React TypeScript web application for task management with real-time collaboration"`
- `/setup "Python CLI tool for automated database migrations and schema management"`
- `/setup "Flutter mobile app for expense tracking with cloud synchronization"`

Use the project description to determine:
- Technology stack and platform type
- Appropriate project structure
- Relevant documentation categories
- Development workflow requirements
</input_processing>

<project_structure_creation>
Create this complete structure based on project type:

<documentation_hierarchy>
```
/documentation/
├── reference/              # Evergreen documentation
│   ├── ARCHITECTURE.md     # System architecture and design
│   ├── CODING_GUIDELINES.md # Code quality and style standards
│   ├── SETUP.md           # Development environment setup
│   ├── TESTING.md         # Testing strategy and frameworks
│   ├── API_DESIGN.md      # API/interface design principles
│   ├── SECURITY.md        # Security requirements and patterns
│   ├── PERFORMANCE.md     # Performance standards and optimization
│   └── DEPLOYMENT.md      # Build and deployment procedures
├── planning/              # Project planning and features
│   ├── current/           # Active development work
│   ├── upcoming/          # Near-term planned features
│   ├── future/            # Long-term roadmap
│   ├── completed/         # Historical decisions and completed work
│   └── research/          # Research findings from /duck command
├── processes/             # Workflow and operational procedures
│   ├── VERSION_CONTROL.md # Git workflow and collaboration
│   ├── CODE_REVIEW.md     # Code review standards
│   ├── COLLABORATION.md   # Team communication protocols
│   └── AI_INTEGRATION.md  # AI assistance guidelines
├── technical/             # Component-specific implementation details
│   ├── [platform]/        # Platform-specific components
│   ├── systems/           # System-level components
│   └── integrations/      # External service integrations
└── archive/               # Deprecated or historical documentation
```
</documentation_hierarchy>

<technology_specific_adaptation>
Adapt structure based on project type:

**Web Applications**:
- Add `technical/frontend/` and `technical/backend/`
- Include `reference/UI_DESIGN.md`
- Add API documentation structure

**Mobile Applications**:
- Add `technical/mobile/` with platform subdivisions
- Include app store and distribution documentation
- Add device-specific testing guidance

**CLI Tools**:
- Focus on `reference/API_DESIGN.md` for command interface
- Add usage examples and command reference
- Include distribution and packaging docs

**Libraries/Frameworks**:
- Emphasize `reference/API_DESIGN.md`
- Add examples and integration guides
- Include versioning and changelog structure

**Backend Services**:
- Add `technical/database/`, `technical/apis/`
- Include monitoring and operations documentation
- Add service deployment and scaling guides
</technology_specific_adaptation>
</project_structure_creation>

<file_creation>
Generate these essential files:

<readme_template>
Create comprehensive README.md with:

```markdown
# [Project Name]

[Brief description based on project input]

## Overview

[Expanded description with key features and goals]

## Quick Start

### Prerequisites
- [Technology stack requirements]
- [Development tools needed]
- [System requirements]

### Installation
```bash
[Installation commands]
```

### Basic Usage
```bash
[Basic usage examples]
```

## Development

### Setup
See [documentation/reference/SETUP.md](documentation/reference/SETUP.md) for detailed development environment setup.

### Architecture
Review [documentation/reference/ARCHITECTURE.md](documentation/reference/ARCHITECTURE.md) for system design and architectural decisions.

### Coding Standards
Follow guidelines in [documentation/reference/CODING_GUIDELINES.md](documentation/reference/CODING_GUIDELINES.md).

## Documentation

This project uses a structured documentation approach:

- **Reference Documentation**: `documentation/reference/` - Stable, long-term reference materials
- **Planning Documents**: `documentation/planning/` - Feature planning and project decisions
- **Technical Guides**: `documentation/technical/` - Implementation details by component
- **Process Documentation**: `documentation/processes/` - Workflow and operational procedures

## Contributing

See [documentation/processes/](documentation/processes/) for development workflows and contribution guidelines.

## License

[License information]
```
</readme_template>

<claude_md_template>
Create initial CLAUDE.md with project-specific standards:

```markdown
# [Project Name] - Development Standards

## Project Overview

[Project description and development philosophy]

**Technology Stack**: [Specific technologies for this project]
**Development Approach**: Test-Driven Development with idiomatic, maintainable code

## Development Standards

**MANDATORY: All development MUST follow these standards**

### Test-Driven Development
- Write failing tests BEFORE implementing any functionality
- Minimum 80% code coverage required
- Tests must pass before any commit
- Use [specific testing framework] following [platform] conventions

### Code Quality Constraints
- Maximum cyclomatic complexity: 8 (warning), 15 (error)
- Maximum function/method length: [30-60] lines
- Maximum class/module length: [200-500] lines
- Line length: [80-120] characters
- No magic numbers or hardcoded strings

### [Technology] Idiomatic Requirements
[Language/framework-specific patterns and conventions]

### Pre-commit Hooks (REQUIRED)
```bash
[Specific pre-commit hook setup commands for this technology]
```
Hooks run: linting, formatting, tests, security scans

## Development Workflow

### TDD Workflow (MANDATORY)
1. `[test command]` - Write failing test first
2. `[run test]` - Verify test fails
3. Implement minimal code to pass test
4. `[run test]` - Verify test passes
5. Refactor while keeping tests green
6. `[quality checks]` - Run all quality gates
7. `[commit]` - Commit only when all checks pass

### Quality Gate Commands (ALL must pass)
- `[lint command]` - Code quality validation (MUST pass)
- `[format command]` - Code formatting (auto-fix)
- `[test command]` - All tests with minimum 80% coverage
- `[build command]` - Build with quality checks

## Project Context

**Current Status**: [Initial setup/Development phase]
**Architecture**: [Key architectural decisions]
**Dependencies**: [Critical external dependencies]
```
</claude_md_template>

<essential_documentation>
Create initial documentation files:

**documentation/reference/SETUP.md**:
- Development environment setup guide
- Tool installation instructions
- Configuration steps
- Verification procedures

**documentation/reference/ARCHITECTURE.md**:
- High-level system design
- Key architectural decisions
- Technology choices and rationale
- System boundaries and interfaces

**documentation/reference/CODING_GUIDELINES.md**:
- Code style standards
- Naming conventions
- Error handling patterns
- Testing requirements

**documentation/processes/VERSION_CONTROL.md**:
- Git workflow and branching strategy
- Commit message standards
- Code review process
- Release procedures
</essential_documentation>
</file_creation>

<git_integration>
Set up version control structure:

<gitignore_creation>
Create appropriate .gitignore for technology stack:
- Language-specific ignore patterns
- IDE and editor files
- Build artifacts and dependencies
- Environment and configuration files
- Log files and temporary data
</gitignore_creation>

<initial_commit_prep>
Prepare for initial commit:
- Stage documentation structure
- Stage README.md and CLAUDE.md
- Stage .gitignore and configuration files
- Prepare commit message following standards
</initial_commit_prep>
</git_integration>

<tooling_setup>
Set up comprehensive development tooling and automation:

<pre_commit_hooks>
Configure pre-commit hooks based on technology stack:

**Universal Pre-commit Configuration** (`.pre-commit-config.yaml`):
```yaml
repos:
  - repo: local
    hooks:
      - id: tests
        name: Run Tests
        entry: [test_command]
        language: system
        pass_filenames: false
        always_run: true
      - id: lint
        name: Lint Code
        entry: [lint_command]
        language: system
        pass_filenames: false
      - id: format
        name: Format Code
        entry: [format_command]
        language: system
        pass_filenames: false
      - id: security
        name: Security Scan
        entry: [security_command]
        language: system
        pass_filenames: false
        stages: [commit]
```

**Technology-Specific Hooks**:
- **JavaScript/TypeScript**: ESLint, Prettier, TypeScript check, test runner
- **Python**: black, flake8, mypy, pytest, bandit security scan
- **Rust**: rustfmt, clippy, cargo test
- **Go**: gofmt, golangci-lint, go test, gosec
- **Java**: google-java-format, SpotBugs, Maven/Gradle test
- **C#**: dotnet format, dotnet test, security code scan

**Installation Commands**:
```bash
# Install pre-commit framework
pip install pre-commit  # or npm install -g pre-commit

# Install hooks
pre-commit install

# Run on all files initially
pre-commit run --all-files
```
</pre_commit_hooks>

<quality_tools>
Set up technology-specific quality tooling:

**JavaScript/TypeScript Projects**:
```json
// package.json scripts
{
  "scripts": {
    "test": "jest --coverage --passWithNoTests",
    "test:watch": "jest --watch",
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx --max-warnings 0",
    "lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "type-check": "tsc --noEmit",
    "build": "tsc && npm run lint && npm run test",
    "security": "npm audit --audit-level moderate"
  }
}

// .eslintrc.json
{
  "extends": ["@typescript-eslint/recommended", "prettier"],
  "rules": {
    "complexity": ["error", 8],
    "max-lines-per-function": ["error", 60],
    "max-len": ["error", { "code": 120 }]
  }
}

// .prettierrc
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 120,
  "tabWidth": 2
}
```

**Python Projects**:
```toml
# pyproject.toml
[tool.black]
line-length = 120
target-version = ['py39']

[tool.flake8]
max-line-length = 120
max-complexity = 8
extend-ignore = ["E203", "W503"]

[tool.mypy]
strict = true
warn_return_any = true
warn_unused_configs = true

[tool.pytest.ini_options]
minversion = "6.0"
addopts = "--cov --cov-report=term-missing --cov-fail-under=80"
testpaths = ["tests"]

[tool.bandit]
exclude_dirs = ["tests"]
skips = ["B101"]
```

**Rust Projects**:
```toml
# Cargo.toml
[dev-dependencies]
criterion = "0.4"

# .rustfmt.toml
max_width = 120
hard_tabs = false
tab_spaces = 4

# .clippy.toml
cognitive-complexity-threshold = 8
```

**Go Projects**:
```yaml
# .golangci.yml
linters:
  enable:
    - gofmt
    - golint
    - govet
    - errcheck
    - gosec
    - gocyclo
linters-settings:
  gocyclo:
    min-complexity: 8
  goconst:
    min-len: 2
    min-occurrences: 2
```
</quality_tools>

<testing_framework>
Set up testing infrastructure:

**Test Framework Configuration**:
- Create test directory structure appropriate for technology
- Set up test runner with coverage reporting (minimum 80%)
- Configure continuous testing in watch mode for development
- Set up integration test infrastructure
- Configure performance and security testing where applicable

**Test Templates**:
- Unit test templates following TDD patterns
- Integration test templates for API/component testing
- End-to-end test templates for full application testing
- Mock and fixture setup for consistent testing
</testing_framework>

<development_scripts>
Create development convenience scripts:

**Universal Scripts** (`scripts/` or appropriate location):
- `setup.sh/setup.bat` - Complete development environment setup
- `test.sh/test.bat` - Run full test suite with coverage
- `quality.sh/quality.bat` - Run all quality checks
- `build.sh/build.bat` - Build with quality validation
- `clean.sh/clean.bat` - Clean build artifacts and caches

**Technology-Specific Automation**:
- Dependency management and updates
- Database migration and seeding scripts
- Code generation and scaffolding tools
- Deployment and release preparation scripts
</development_scripts>

<ide_configuration>
Set up IDE/Editor configuration files:

**VS Code** (`.vscode/`):
```json
// settings.json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "files.exclude": {
    "node_modules": true,
    "**/.git": true
  }
}

// extensions.json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-typescript-next",
    "bradlc.vscode-tailwindcss"
  ]
}
```

**Universal Editor Config** (`.editorconfig`):
```ini
root = true

[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
indent_style = space
indent_size = 2

[*.{py,java,go,rs}]
indent_size = 4

[*.md]
trim_trailing_whitespace = false
```
</ide_configuration>
</tooling_setup>

<output_format>
Structure your setup execution systematically:

<project_analysis>
**Project Type**: [Web app, mobile app, CLI tool, library, service, etc.]
**Technology Stack**: [Primary language, framework, key dependencies]
**Development Focus**: [Key development priorities and constraints]
**Documentation Needs**: [Specific documentation categories required]
</project_analysis>

<structure_created>
**Documentation Folders**:
```
[Complete folder structure created]
```

**Essential Files Created**:
- README.md - [Brief description of content]
- CLAUDE.md - [Project-specific development standards]
- .gitignore - [Technology-appropriate ignore patterns]
- documentation/reference/[list of reference files]
- documentation/processes/[list of process files]

**Development Tooling Configured**:
- .pre-commit-config.yaml - [Quality gates and automation hooks]
- [Technology config files] - [Linting, formatting, testing configuration]
- .editorconfig - [Universal editor settings]
- .vscode/ - [VS Code workspace configuration]
- scripts/ - [Development convenience scripts]
</structure_created>

<file_contents>
**README.md Summary**:
[Key sections and content overview]

**CLAUDE.md Configuration**:
[Technology-specific standards and commands configured]

**Pre-commit Hooks Setup**:
[Quality gates configured: tests, linting, formatting, security scanning]

**Development Tools Configuration**:
[Linting rules, formatting standards, testing framework, IDE settings]

**Documentation Framework**:
[Overview of documentation structure and purpose]
</file_contents>

<next_steps>
**Immediate Actions**:
1. Install dependencies: `[technology-specific package manager install command]`
2. Install pre-commit hooks: `pre-commit install`
3. Run initial quality check: `pre-commit run --all-files`
4. Verify tooling setup: `[technology-specific test/lint/format commands]`
5. Initialize git repository if not already done
6. Review and customize generated documentation

**Quality Gates Activated**:
- Pre-commit hooks enforce quality standards on every commit
- Continuous testing with coverage requirements (80%+)
- Automated linting and formatting appropriate for the technology stack
- Security scanning and vulnerability detection
- Code complexity monitoring (max 8 cyclomatic complexity)

**Development Workflow Ready**:
- `/duck` command ready for idea exploration with research documentation
- `/plan` command ready for feature planning with quality integration
- `/implement` command ready for TDD development with continuous quality gates
- `/commit` command integrated with pre-commit hooks for quality validation
- Documentation structure supports full workflow with cross-command integration
</next_steps>
</output_format>

<examples>
<example>
User input: `/setup "React TypeScript web application for task management with real-time collaboration"`

<project_analysis>
**Project Type**: Full-stack web application
**Technology Stack**: React 18+ with TypeScript, Node.js backend, WebSocket for real-time features
**Development Focus**: Type safety, real-time performance, scalable architecture
**Documentation Needs**: UI/UX patterns, API design, real-time architecture, testing strategies
</project_analysis>

<structure_created>
**Documentation Folders**:
```
documentation/
├── reference/
│   ├── ARCHITECTURE.md
│   ├── CODING_GUIDELINES.md
│   ├── SETUP.md
│   ├── TESTING.md
│   ├── API_DESIGN.md
│   ├── UI_DESIGN.md
│   ├── SECURITY.md
│   ├── PERFORMANCE.md
│   └── DEPLOYMENT.md
├── planning/
│   ├── current/
│   ├── upcoming/
│   ├── future/
│   ├── completed/
│   └── research/
├── processes/
│   ├── VERSION_CONTROL.md
│   ├── CODE_REVIEW.md
│   ├── COLLABORATION.md
│   └── AI_INTEGRATION.md
├── technical/
│   ├── frontend/
│   ├── backend/
│   ├── database/
│   ├── realtime/
│   └── integrations/
└── archive/
```

**Essential Files Created**:
- README.md - Comprehensive project overview with [technology] setup
- CLAUDE.md - [Language]-specific standards with [framework] patterns
- .gitignore - [Language/platform] build artifacts and dependencies
- documentation/reference/[INTERFACE_TYPE]_DESIGN.md - [Technology] patterns
- documentation/reference/[RELEVANT_AREAS].md - [Project-specific] standards

**Development Tooling Configured**:
- .pre-commit-config.yaml - [Linter], [formatter], [compiler/type check], tests, security audit
- [Build config file] - Complete script suite for development, testing, and quality
- [Linter config] - [Language/framework] rules with complexity limits (max 8)
- [Formatter config] - Consistent code formatting (120 char line length)
- [Test config] - Testing with coverage requirements (80%+)
- .editorconfig - Universal editor settings
- .vscode/ - VS Code settings with [technology] extensions
- scripts/ - setup.sh, test.sh, quality.sh, build.sh convenience scripts
</structure_created>

<file_contents>
**README.md Summary**:
- Project overview with [project-specific goals and features]
- [Technology stack] quick start guide with tooling setup
- Development workflow with [build tool] scripts and quality gates
- Architecture overview linking to detailed docs
- Contributing guidelines with quality standards and documentation structure

**CLAUDE.md Configuration**:
- [Language] strict mode with [technology] patterns enforcement
- TDD workflow with [testing framework] and appropriate testing libraries
- Complexity limits: 8 cyclomatic, 30-60 line functions
- Pre-commit hooks: tests, linting, formatting, type/compilation check, security audit
- Quality gates: 80% coverage, zero linting errors, compilation success

**Pre-commit Hooks Setup**:
- Automated tests with coverage requirements on every commit
- [Language linter] with technology-specific rules and complexity limits
- [Code formatter] with project-appropriate formatting standards
- [Compilation/type check] for language-appropriate safety checks
- [Security scanner] for vulnerability and secret detection

**Development Tools Configuration**:
- [Language-specific linting]: Standards with complexity monitoring  
- [Code formatter]: Consistent formatting with project-specific rules
- [Testing framework]: Framework with coverage reporting and appropriate libraries
- VS Code: Optimized settings and technology-specific recommended extensions
- Scripts: Convenience commands for all development tasks

**Documentation Framework**:
- Technology-appropriate design patterns and guidelines
- Interface design standards (API/CLI/UI based on project type)
- Architecture documentation with performance and scalability considerations  
- Testing strategy covering appropriate test types with TDD approach
</file_contents>

<next_steps>
**Immediate Actions**:
1. Review documentation/reference/SETUP.md for development environment
2. Install Node.js, npm/yarn, and configure TypeScript
3. Set up testing framework and pre-commit hooks
4. Initialize git repository and make initial commit

**Development Workflow Ready**:
- `/duck` can research task management patterns and real-time architectures
- `/plan` can create feature plans with TypeScript implementation details
- `/implement` can follow React/TypeScript patterns with quality gates
- Full documentation structure supports agile development workflow
</next_steps>
</example>
</examples>

Begin by analyzing the project description to understand the technology stack and development requirements. Create a comprehensive project structure that supports the entire Claude command workflow while being specifically tailored to the project's needs.