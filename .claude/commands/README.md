# Claude Development Commands

A comprehensive workflow implementation using Claude commands that embody universal software development best practices through structured, AI-optimized prompts.

## Command Architecture

All commands are designed following **Anthropic's official prompt engineering best practices** for Claude 4 (Sonnet 4):

- **Structured Instructions**: Clear, explicit guidance with XML formatting
- **Chain-of-Thought**: Systematic reasoning encouraged throughout
- **Examples**: Comprehensive examples demonstrating expected outputs
- **Context Awareness**: Leverages existing codebase and documentation
- **Quality Focus**: Built-in validation and safety checks

## Complete Command Reference

### `/duck` - Enhanced Brainstorming & Idea Exploration
**Purpose**: Deep exploration and analysis of ideas before planning or implementation

**Usage**:
```
/duck [idea/problem/concept]
/duck "user authentication system"
/duck "performance optimization for mobile app"
```

**Key Features**:
- Investigative research with codebase analysis
- Creative brainstorming and alternative generation
- Critical analysis of trade-offs and risks
- Stakeholder impact assessment
- Comprehensive recommendations with next steps

**Output**: Structured analysis with understanding, research findings, alternatives, critical analysis, impact assessment, and recommendations

---

### `/plan` - Planning Document Creator  
**Purpose**: Creates structured planning documents with phases, actions, and quality gates

**Usage**:
```
/plan [project/feature description]
/plan [existing_document.md] update
/plan "OAuth integration with security compliance"
```

**Key Features**:
- Requirements gathering with clarifying questions
- Phased implementation with incremental delivery
- Quality gates and testing requirements throughout
- Document lifecycle management (upcoming → current → completed)
- Clear acceptance criteria and progress tracking

**Output**: Complete planning document with goal, context, technical architecture, and detailed action phases

---

### `/implement` - Implementation Executor
**Purpose**: Executes planning documents following universal development standards

**Usage**:
```
/implement [planning_document.md]
/implement [planning_document.md] [phase_number]
/implement [planning_document.md] continue
```

**Key Features**:
- Planning document analysis and environment validation
- Test-first development practices
- Quality standards application (linting, testing, security)
- Progress tracking with detailed updates
- Documentation maintenance during implementation

**Output**: Implementation progress with detailed status updates, quality metrics, and discoveries

---

### `/commit` - Automated Commit Handler
**Purpose**: Analyzes changes and executes commits with quality validation and proper batching

**Usage**:
```
/commit
/commit [commit_message]
/commit --review-only
/commit --batch [strategy]
```

**Key Features**:
- Comprehensive safety checks and quality gates
- Intelligent change batching (feature, fix, docs, refactor)
- Standardized commit message generation
- Build verification and test execution
- Rollback capabilities and error recovery

**Output**: Change analysis, quality gate results, commit strategy, and execution status

---

### `/document` - Documentation Maintenance
**Purpose**: Maintains comprehensive, accurate, and well-organized documentation

**Usage**:
```
/document
/document [scope]
/document --check-only
/document [specific_file.md]
```

**Key Features**:
- Comprehensive documentation review and analysis
- Issue identification (outdated content, broken links, gaps)
- Content updates following single source of truth principle
- Cross-reference integration and validation
- Quality assurance for multiple audiences

**Output**: Audit report with issues identified, updates applied, quality metrics, and recommendations

---

### `/reference` - Evergreen Documentation Creator
**Purpose**: Creates stable, authoritative reference documentation

**Usage**:
```
/reference [topic]
/reference [existing_file.md] update
/reference --template [type]
```

**Key Features**:
- Comprehensive topic analysis and research integration
- Structured creation using established formats
- Cross-reference integration with bidirectional linking
- Status indicators and transition state documentation
- Long-term maintainability and value

**Output**: Complete reference document with proper structure, cross-references, and maintenance guidelines

---

### `/root` - Deep Investigation Mode
**Purpose**: Systematic debugging and root cause analysis

**Usage**:
```
/root [problem/issue description]
/root [error_message]
/root [system_component] [behavior]
```

**Key Features**:
- Scientific methodology combining detective work
- Systematic evidence collection and hypothesis testing
- Root cause analysis with comprehensive solution development
- Prevention measures and system hardening recommendations
- Documentation of findings for future reference

**Output**: Complete investigation report with evidence, hypothesis testing, root cause analysis, and solution recommendations

## Workflow Integration

### Primary Development Flow
```
/duck [idea] → /plan [concept] → /implement [plan] → /commit
```

### Documentation Flow  
```
/reference [topic] → /document [maintenance] → /commit
```

### Problem Resolution Flow
```
/root [issue] → /plan [solution] → /implement [fix] → /commit
```

### Maintenance Flow
```
/document [review] → /reference [updates] → /commit
```

## Command Design Principles

### Universal Quality Standards
All commands implement:
- **Code Quality**: Complexity limits, formatting, type safety
- **Security**: Input validation, authentication, authorization
- **Performance**: Platform-specific optimization requirements
- **Testing**: Comprehensive coverage at all levels
- **Documentation**: Always current, AI-friendly structure

### Platform Adaptability
Commands work across:
- **Mobile Development**: iOS, Android, React Native, Flutter
- **Web Development**: Frontend frameworks, backend services, full-stack
- **Desktop Applications**: Native and cross-platform solutions
- **CLI Tools**: Command-line utilities and developer tools
- **Libraries**: Reusable components and frameworks
- **Backend Services**: APIs, microservices, serverless functions
- **Embedded Systems**: IoT and real-time applications

### AI Optimization
Commands leverage Claude 4 capabilities:
- **Structured Prompts**: XML formatting for clear output
- **Chain-of-Thought**: Systematic reasoning throughout
- **Context Awareness**: Integration with existing codebase
- **Quality Validation**: Built-in safety and quality checks
- **Iterative Improvement**: Designed for refinement and enhancement

## Safety and Quality Gates

### Built-in Safety Measures
- **Destructive Operation Warnings**: Explicit permission for risky changes
- **Quality Gate Validation**: Tests, linting, security checks must pass
- **Rollback Capabilities**: Safe recovery from failed operations
- **Progress Tracking**: Detailed documentation of all changes
- **Error Handling**: Systematic approach to issue resolution

### Quality Standards Enforcement
- **Code Standards**: Automated validation of coding guidelines
- **Test Requirements**: Comprehensive testing at all levels
- **Documentation Currency**: Always up-to-date documentation
- **Security Compliance**: Built-in security validation
- **Performance Monitoring**: Automated performance regression detection

## Customization and Extension

### Adapting for Your Project
1. **Technology Stack**: Modify commands for your specific tools and frameworks
2. **Quality Standards**: Adjust metrics and thresholds for your context
3. **Workflow Preferences**: Customize command interactions for your team
4. **Documentation Structure**: Adapt organization to your project needs

### Adding Custom Commands
Follow established patterns:
- **YAML Frontmatter**: Title and description
- **Structured Instructions**: Clear role and process definition
- **XML Output Format**: Consistent, parseable responses
- **Examples**: Comprehensive demonstrations
- **Integration**: Connect with existing workflow

## Best Practices

### Using Commands Effectively
1. **Start Simple**: Begin with `/duck` for any new idea or problem
2. **Follow the Flow**: Use the primary workflow for best results
3. **Iterate**: Commands improve with feedback and refinement
4. **Document Everything**: Use `/reference` to capture important patterns
5. **Maintain Quality**: Let `/commit` enforce quality standards

### Team Collaboration
1. **Shared Standards**: Use consistent command workflows across team
2. **Knowledge Sharing**: Leverage `/reference` for team knowledge
3. **Quality Consistency**: Apply same standards regardless of developer
4. **Documentation Currency**: Regular `/document` maintenance
5. **Problem Resolution**: Use `/root` for systematic debugging

### Long-term Success
1. **Continuous Improvement**: Regularly update commands and standards
2. **Knowledge Preservation**: Document decisions and patterns
3. **Quality Evolution**: Refine standards based on experience
4. **Process Optimization**: Streamline workflows based on usage patterns
5. **Community Contribution**: Share improvements and learnings

## Support and Resources

### Getting Help
- **Command Documentation**: Each command includes comprehensive examples
- **Workflow Guides**: Step-by-step process documentation
- **Best Practices**: Proven patterns and approaches
- **Troubleshooting**: Common issues and solutions

### Further Reading
- [Anthropic Prompt Engineering Documentation](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering)
- [Claude Code Best Practices](https://www.anthropic.com/engineering/claude-code-best-practices)
- [Universal Development Standards](../CLAUDE.md)
- [Documentation Organization](../documentation/DOCUMENTATION_ORGANISATION.md)

---

*This command framework implements Anthropic's official prompt engineering best practices and is optimized for Claude 4 (Sonnet 4) capabilities. Commands are designed to improve with iteration and can be customized for any development context.*