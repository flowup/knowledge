/*
 * Variables
 */

variable "github_repository" {
    type = "string"
}

variable "github_token" {
    type = "string"
}

variable "github_organization" {
    type = "string"
}

/*
 * Providers
 */

provider "github" {
  token        = "${var.github_token}"
  organization = "${var.github_organization}"
}

/*
 * Project Scope Labels
 */

resource "github_issue_label" "frontend" {
  repository = "${var.github_repository}"
  name       = "frontend"
  color      = "1d76db"
}

resource "github_issue_label" "backend" {
  repository = "${var.github_repository}"
  name       = "backend"
  color      = "fbca04"
}

/*
 * Infrastructure and deployments
 */

resource "github_issue_label" "infrastructure" {
  repository = "${var.github_repository}"
  name       = "infrastructure"
  color      = "09446d"
}

resource "github_issue_label" "kubernetes" {
  repository = "${var.github_repository}"
  name       = "kubernetes"
  color      = "09446d"
}

resource "github_issue_label" "ci" {
  repository = "${var.github_repository}"
  name       = "ci"
  color      = "34bcac"
}

/*
 * Management and utils
 */

resource "github_issue_label" "outsourced" {
  repository = "${var.github_repository}"
  name       = "outsourced"
  color      = "dbef26"
}

/*
 * Severity, Frequency
 */

// Severity
resource "github_issue_label" "severity1" {
  repository = "${var.github_repository}"
  name       = "severity1: confusing"
  color      = "0052cc"
}

resource "github_issue_label" "severity2" {
  repository = "${var.github_repository}"
  name       = "severity2: inconvinient"
  color      = "0052cc"
}

resource "github_issue_label" "severity3" {
  repository = "${var.github_repository}"
  name       = "severity3: broken"
  color      = "0052cc"
}

resource "github_issue_label" "severity4" {
  repository = "${var.github_repository}"
  name       = "severity4: memleak"
  color      = "0052cc"
}

resource "github_issue_label" "severity5" {
  repository = "${var.github_repository}"
  name       = "severity5: regression"
  color      = "0052cc"
}

resource "github_issue_label" "severity6" {
  repository = "${var.github_repository}"
  name       = "severity6: security"
  color      = "0052cc"
}

// Frequency
resource "github_issue_label" "freq1" {
  repository = "${var.github_repository}"
  name       = "freq1: low"
  color      = "e0c057"
}

resource "github_issue_label" "freq2" {
  repository = "${var.github_repository}"
  name       = "freq2: medium"
  color      = "e0c057"
}

resource "github_issue_label" "freq3" {
  repository = "${var.github_repository}"
  name       = "freq3: high"
  color      = "e0c057"
}

resource "github_issue_label" "freq4" {
  repository = "${var.github_repository}"
  name       = "freq4: critical"
  color      = "e0c057"
}
