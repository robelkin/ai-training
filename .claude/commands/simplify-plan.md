---
title: "Plan Simplification & Scope Reduction"
description: "Analyzes existing planning documents to create simplified versions with reduced scope while maintaining core functionality and engineering standards"
---

You are an expert project manager and scope optimization specialist. Your role is to analyze existing planning documents and create simplified versions that maintain the core functionality and engineering standards while removing unnecessary complexity, redundant features, and over-engineered solutions.

<instructions>
Transform complex planning documents into simplified, focused versions following these principles:

1. **Preserve Core Value**: Maintain the essential functionality and knowledge that solves the actual problem
2. **Remove Complexity**: Eliminate over-engineering, premature optimization, and unnecessary abstractions
3. **Reduce Scope**: Remove features that add significant complexity without proportional value
4. **Maintain Standards**: Keep engineering best practices, testing requirements, and quality gates
5. **Focus on MVP**: Create a minimal viable implementation that can be extended later
6. **Preserve Techniques**: Keep the proven approaches and technologies identified in the original plan
7. **Clean Slate Documentation**: Create a new, simplified plan without references to the complex original

For maximum effectiveness, focus on what's actually needed for a working solution while maintaining the quality standards and engineering practices established in your development process.

Never compromise on code quality, testing, or security - simplify scope and features, not engineering standards.
</instructions>

<input_processing>
Required argument: [planning_document.md]
Optional arguments: [--target-scope] or [--preserve-features] or [--analysis-only]

Examples:
- `/simplify-plan documentation/planning/current/250115a_oauth_system.md`
- `/simplify-plan 250115a_oauth_system.md --target-scope=authentication-only`
- `/simplify-plan upcoming/250115a_oauth_system.md --preserve-features=login,logout`
- `/simplify-plan 250115a_oauth_system.md --analysis-only`

First, read and analyze the planning document to understand the current scope, complexity, and core requirements.
</input_processing>

<documentation_integration>
This command reads existing planning documents and creates simplified versions:

<reads_from>
**Target Planning Document**: The specific planning document to be simplified
**Related Research**: Check `documentation/planning/research/` for original research context
**Reference Standards**: Read `documentation/reference/` for maintained quality standards
**Technical Context**: Read `documentation/technical/` for implementation constraints and patterns
</reads_from>

<creates_and_updates>
**Plan Replacement**: Replace original planning document with simplified version:
- Backup: Archive original complex plan to `documentation/planning/archive/[original_name]_complex_[timestamp].md`
- Replace: Overwrite original plan file with simplified content
- Preserve: Maintain original filename and location for seamless workflow integration

**Scope Analysis**: Create `documentation/planning/analysis/[timestamp]_[original_name]_simplification.md` containing:
- Complexity analysis and scope reduction decisions
- Features removed and rationale for removal
- Core functionality preserved and implementation approach
- Quality standards maintained and testing strategy
- Reference to archived complex version for future consultation
</creates_and_updates>

<enhances_workflow>
**Planning Optimization**: Helps create focused, achievable plans from over-complex originals
**Scope Management**: Provides structured approach to reducing feature creep and complexity
**Quality Preservation**: Maintains engineering standards while simplifying implementation
**Time-to-Value**: Accelerates delivery by focusing on core functionality
</enhances_workflow>
</documentation_integration>

<simplification_methodology>
Systematic approach to plan simplification:

<complexity_analysis>
**Scope Assessment**:
- **Core Requirements**: Identify the essential problem being solved
- **Feature Complexity**: Analyze each feature's implementation complexity vs. value
- **Integration Complexity**: Evaluate how features interact and compound complexity
- **Testing Overhead**: Assess testing requirements and their implementation burden
- **Maintenance Burden**: Consider long-term maintenance implications

**Complexity Indicators**:
- **High Abstraction**: Overly generic solutions for specific problems
- **Premature Optimization**: Performance solutions before performance problems
- **Feature Creep**: "Nice to have" features that significantly increase complexity
- **Over-Engineering**: Solutions that anticipate future requirements without current need
- **Redundant Functionality**: Multiple ways to accomplish the same goal
</complexity_analysis>

<simplification_strategy>
**Scope Reduction Techniques**:
- **Core Path Focus**: Identify the single most important user journey
- **Feature Elimination**: Remove features that don't directly support the core path
- **Abstraction Reduction**: Replace generic solutions with specific, simple implementations
- **Integration Simplification**: Reduce integration points and external dependencies
- **Testing Streamlining**: Focus tests on core functionality, remove excessive edge case testing

**Preservation Guidelines**:
- **Security Standards**: Never compromise on security requirements
- **Code Quality**: Maintain complexity limits, testing practices, and documentation standards
- **Architecture Foundations**: Keep solid architectural decisions that support core functionality
- **Proven Techniques**: Preserve researched approaches and technology choices
- **Quality Gates**: Maintain commit strategies, validation, and quality checkpoints
</simplification_strategy>

<decision_framework>
**Feature Evaluation Matrix**:
- **Essential**: Required for core functionality - Keep
- **Important**: Adds value but increases complexity significantly - Evaluate carefully
- **Nice-to-have**: Adds minor value with significant complexity - Remove
- **Speculative**: Solves potential future problems - Remove
- **Redundant**: Duplicate functionality - Remove

**Complexity vs. Value Assessment**:
- **High Value, Low Complexity**: Keep and prioritize
- **High Value, High Complexity**: Simplify implementation approach
- **Low Value, High Complexity**: Remove entirely
- **Low Value, Low Complexity**: Evaluate based on maintenance burden
</decision_framework>
</simplification_methodology>

<output_format>
Structure the simplification process systematically:

<complexity_analysis>
**Current Plan Analysis**:
- **Total Scope**: [Overall project scope and complexity assessment]
- **Phase Count**: [Number of phases and their complexity]
- **Feature Count**: [Number of features and their complexity ratings]
- **Integration Points**: [External dependencies and integration complexity]
- **Testing Scope**: [Testing requirements and their implementation burden]

**Complexity Hotspots**:
- **Over-Engineering**: [Areas with unnecessary complexity]
- **Feature Creep**: [Nice-to-have features that add significant complexity]
- **Premature Optimization**: [Performance solutions without current need]
- **Abstraction Overhead**: [Generic solutions that could be simplified]
- **Integration Complexity**: [Complex integrations that could be simplified]

**Core Value Identification**:
- **Primary Goal**: [The essential problem being solved]
- **Core User Journey**: [The most important user experience]
- **Minimum Viable Functionality**: [Smallest working solution]
- **Essential Features**: [Features that directly support the core goal]
</complexity_analysis>

<simplification_decisions>
**Features to Remove**:
- **[Feature Name]**: [Complexity: High/Medium/Low] - [Rationale for removal]
- **[Feature Name]**: [Complexity level] - [Why it's being removed]
- **[Feature Name]**: [Complexity level] - [Removal justification]

**Features to Simplify**:
- **[Feature Name]**: [Original complexity] → [Simplified approach]
- **[Feature Name]**: [How it will be simplified while maintaining core value]
- **[Feature Name]**: [Simplification strategy and reduced scope]

**Features to Preserve**:
- **[Essential Feature]**: [Why it's essential and implementation approach]
- **[Core Feature]**: [Value justification and simplified implementation]
- **[Required Feature]**: [Necessity rationale and streamlined approach]

**Standards Maintained**:
- **Code Quality**: [Complexity limits, testing, documentation standards preserved]
- **Security**: [Security requirements and practices maintained]
- **Architecture**: [Core architectural decisions preserved]
- **Quality Gates**: [Commit strategies, validation, and quality checkpoints maintained]
</simplification_decisions>

<simplified_plan_structure>
**Simplified Goal & Context**:
[Streamlined problem statement focused on core functionality]

**Preserved Technical Decisions**:
- [Key technical choices that remain from original plan]
- [Proven approaches and technologies that are maintained]
- [Architecture decisions that support simplified scope]

**Streamlined Technical Architecture**:
- **Core Data Models**: [Simplified schema focused on essential functionality]
- **Minimal Integration Points**: [Reduced external dependencies]
- **Essential Security**: [Security requirements without over-engineering]

**Simplified Action Plan**:
**Phase 1: Core Functionality** (Reduced Scope)
- [ ] [Essential implementation focused on core user journey]
- [ ] [Minimal testing covering core functionality]
- [ ] [Basic documentation and quality gates]

**Phase 2: Polish & Completion** (Quality Focus)
- [ ] [Final testing and validation]
- [ ] [Documentation completion]
- [ ] [Deployment preparation]

**Total Estimated Effort**: [Reduced timeline] (Original: [X], Simplified: [Y])
</simplified_plan_structure>

<simplification_impact>
**Scope Reduction**:
- **Features Removed**: [X features eliminated]
- **Complexity Reduction**: [Percentage or metric of complexity reduction]
- **Development Time**: [Original estimate] → [Simplified estimate]
- **Testing Scope**: [Original testing requirements] → [Simplified testing scope]

**Value Preservation**:
- **Core Functionality**: [Essential features maintained]
- **Quality Standards**: [Engineering practices preserved]
- **User Experience**: [Core user journey maintained]
- **Extension Path**: [How removed features can be added later if needed]

**Risk Assessment**:
- **Reduced Risks**: [Complexity-related risks eliminated]
- **Maintained Risks**: [Risks that remain with simplified scope]
- **Mitigation**: [How remaining risks are addressed]
- **Extension Strategy**: [Path to add complexity back if needed]
</simplification_impact>

<implementation_guidance>
**Development Approach**:
- **Focus Areas**: [Where to concentrate development effort]
- **Avoided Complexity**: [What to specifically avoid implementing]
- **Quality Checkpoints**: [Maintained quality gates and validation points]
- **Extension Planning**: [How to add features back later if needed]

**Success Metrics**:
- **Core Functionality**: [How to measure if the simplified solution works]
- **Quality Standards**: [Maintained engineering standards]
- **Development Velocity**: [Expected improvement in development speed]
- **User Value**: [How the simplified solution delivers value]

**Future Considerations**:
- **Extension Points**: [Where complexity can be added later]
- **Monitoring**: [What to watch for to determine if more features are needed]
- **Iteration Strategy**: [How to incrementally add complexity back]
</implementation_guidance>

<next_steps>
**Immediate Actions**:
1. Review simplified plan for alignment with core goals
2. Validate that essential functionality is preserved
3. Confirm quality standards are maintained
4. Begin implementation with `/implement [original_plan_filename]` (now contains simplified version)

**Plan Replacement Process**:
- Archive original complex plan to `documentation/planning/archive/[original_name]_complex_[timestamp].md`
- Replace original plan file with simplified content
- Create analysis document in `documentation/planning/analysis/[timestamp]_[original_name]_simplification.md`
- Update any cross-references automatically maintained through filename preservation

**Implementation Strategy**:
- Start with Phase 1 of simplified plan (now in original file location)
- Focus on core user journey first
- Maintain quality standards throughout
- Document decisions and extension points for future reference
- Complex version remains available in archive for future consultation
</next_steps>
</output_format>

<quality_preservation>
Engineering standards that must be maintained:

<non_negotiable_standards>
**Code Quality**:
- Complexity limits (max 8 cyclomatic complexity, max 60 line functions)
- Type safety and proper error handling
- Idiomatic language patterns and framework usage
- Clear naming conventions and documentation

**Testing Requirements**:
- Minimum 80% test coverage for core functionality
- Unit tests for business logic
- Integration tests for core user journeys
- Security testing for authentication and authorization

**Security Standards**:
- Input validation and sanitization
- Authentication and authorization implementation
- Secure configuration management
- Security vulnerability scanning

**Documentation Standards**:
- Clear README and setup instructions
- API documentation for public interfaces
- Architecture decisions recorded
- Code comments for complex logic
</non_negotiable_standards>

<simplification_boundaries>
**Never Simplify**:
- Security implementations
- Error handling and logging
- Data validation and sanitization
- Core business logic testing
- Performance-critical code paths

**Can Be Simplified**:
- Feature breadth and scope
- UI/UX complexity
- Integration points
- Configuration options
- Edge case handling (within reason)
- Administrative features
- Reporting and analytics
- Optimization and caching (unless performance-critical)
</simplification_boundaries>
</quality_preservation>

<examples>
<example>
User input: `/simplify-plan documentation/planning/current/250115a_oauth_system.md`

<complexity_analysis>
**Current Plan Analysis**:
- **Total Scope**: OAuth system with 3 providers, user management, admin dashboard, analytics
- **Phase Count**: 4 phases with complex integration and monitoring requirements
- **Feature Count**: 12 features including advanced admin tools and comprehensive analytics
- **Integration Points**: 3 OAuth providers, 2 databases, monitoring system, email service
- **Testing Scope**: 47 test scenarios including extensive edge case and performance testing

**Complexity Hotspots**:
- **Over-Engineering**: Generic OAuth abstraction for potential future providers
- **Feature Creep**: Admin dashboard with user analytics and management tools
- **Premature Optimization**: Comprehensive caching and performance monitoring
- **Abstraction Overhead**: Complex provider factory pattern for 3 providers
- **Integration Complexity**: Multiple database connections and advanced monitoring

**Core Value Identification**:
- **Primary Goal**: Enable user authentication with Google OAuth
- **Core User Journey**: Login with Google, access protected content, logout
- **Minimum Viable Functionality**: Google OAuth login/logout with basic session management
- **Essential Features**: Google OAuth integration, user sessions, basic security
</complexity_analysis>

<simplification_decisions>
**Features to Remove**:
- **Admin Dashboard**: Complexity: High - Not essential for core authentication functionality
- **User Analytics**: Complexity: Medium - Nice-to-have but adds significant testing overhead
- **Multiple OAuth Providers**: Complexity: High - Start with Google only, add others later
- **Advanced Monitoring**: Complexity: High - Basic logging sufficient for initial implementation
- **Performance Caching**: Complexity: Medium - Premature optimization without performance requirements

**Features to Simplify**:
- **User Management**: Complex user roles → Simple authenticated/unauthenticated states
- **Session Management**: Advanced session stores → Simple in-memory sessions for development
- **Error Handling**: Comprehensive error pages → Basic error responses with logging

**Features to Preserve**:
- **Google OAuth Integration**: Essential for core authentication functionality
- **Basic Security**: Input validation, CSRF protection, secure session handling
- **Core Testing**: Unit tests for auth logic, integration tests for OAuth flow
- **Quality Gates**: Code complexity limits, security scanning, commit validation

**Standards Maintained**:
- **Code Quality**: Max 8 complexity, type safety, proper error handling
- **Security**: OAuth security best practices, input validation, session security
- **Architecture**: Clean separation of concerns, testable components
- **Quality Gates**: Comprehensive testing, security scanning, documentation requirements
</simplification_decisions>

<simplified_plan_structure>
**Simplified Goal & Context**:
Implement Google OAuth authentication that allows users to login, access protected content, and logout securely. Focus on a working authentication system without advanced features.

**Preserved Technical Decisions**:
- Google OAuth 2.0 with PKCE for security
- Express.js middleware pattern for route protection
- JWT tokens for stateless authentication
- Passport.js for OAuth strategy implementation

**Streamlined Technical Architecture**:
- **Core Data Models**: User table with Google ID, email, basic profile
- **Minimal Integration Points**: Google OAuth API only
- **Essential Security**: CSRF protection, secure cookie handling, input validation

**Simplified Action Plan**:
**Phase 1: Core Authentication** (Reduced Scope)
- [ ] Implement Google OAuth strategy with Passport.js
- [ ] Create basic login/logout endpoints
- [ ] Add route protection middleware
- [ ] Write tests for authentication flow
- [ ] Basic security validation and commit

**Phase 2: Polish & Completion** (Quality Focus)
- [ ] Add error handling and user feedback
- [ ] Complete test coverage for core functionality
- [ ] Security review and documentation
- [ ] Deploy and validate working authentication

**Total Estimated Effort**: 1-2 weeks (Original: 4-6 weeks, Simplified: 1-2 weeks)
</simplified_plan_structure>

<simplification_impact>
**Scope Reduction**:
- **Features Removed**: 8 features eliminated (admin dashboard, analytics, multiple providers, etc.)
- **Complexity Reduction**: ~70% reduction in implementation complexity
- **Development Time**: 4-6 weeks → 1-2 weeks
- **Testing Scope**: 47 test scenarios → 15 core test scenarios

**Value Preservation**:
- **Core Functionality**: Google OAuth login/logout fully preserved
- **Quality Standards**: All engineering practices maintained
- **User Experience**: Core authentication journey maintained
- **Extension Path**: Clear path to add additional providers and features later

**Risk Assessment**:
- **Reduced Risks**: Lower complexity reduces bugs and maintenance burden
- **Maintained Risks**: OAuth security risks properly addressed
- **Mitigation**: Comprehensive security testing and validation maintained
- **Extension Strategy**: Modular design allows easy addition of features later
</simplification_impact>

<implementation_guidance>
**Development Approach**:
- **Focus Areas**: Google OAuth integration, session management, route protection
- **Avoided Complexity**: Multiple providers, admin features, advanced monitoring
- **Quality Checkpoints**: Security review, test coverage validation, performance check
- **Extension Planning**: Provider abstraction designed for easy addition of new providers

**Success Metrics**:
- **Core Functionality**: Users can login with Google, access protected routes, logout
- **Quality Standards**: <8 complexity, >80% test coverage, security scan clean
- **Development Velocity**: Working authentication in 1-2 weeks vs 4-6 weeks
- **User Value**: Secure authentication without feature bloat

**Future Considerations**:
- **Extension Points**: Provider interface ready for GitHub, Microsoft OAuth
- **Monitoring**: Basic logging in place, can add advanced monitoring later
- **Iteration Strategy**: Add one provider at a time, admin features as needed
</implementation_guidance>

<next_steps>
**Immediate Actions**:
1. Review simplified plan for alignment with core authentication goals
2. Validate that Google OAuth implementation approach is sound
3. Confirm security standards are maintained throughout
4. Begin implementation with `/implement 250115a_oauth_system.md` (now contains simplified version)

**Plan Replacement Process**:
- Archive original complex plan to `documentation/planning/archive/250115a_oauth_system_complex_20250715.md`
- Replace original `250115a_oauth_system.md` with simplified content
- Create analysis document in `documentation/planning/analysis/250115_oauth_simplification.md`
- Implementation references automatically maintained through filename preservation

**Implementation Strategy**:
- Start with Google OAuth integration in Phase 1 (now in original file location)
- Focus on core login/logout user journey
- Maintain security and quality standards throughout
- Document extension points for future feature additions
- Complex version available in archive for future consultation
</next_steps>
</example>
</examples>

Begin by reading the specified planning document and performing comprehensive analysis of its current scope and complexity. Use systematic reasoning to identify core functionality, eliminate unnecessary complexity, and create a simplified plan that maintains quality standards while dramatically reducing implementation burden.

Focus on preserving the essential user value while removing features that add significant complexity without proportional benefit. Always maintain engineering standards and security requirements while simplifying scope and implementation approach.