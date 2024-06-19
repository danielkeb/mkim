import subprocess

# Local path to your cloned repository
repo_path = '/home/daniel/Desktop/myproject/mkim'

# Commit hash of the commit you want to revert to
commit_hash = '94b8d181bec10d177e193db277d6e6c737b970b2'

# Change to the repository directory
try:
    # Checkout the commit hash in detached HEAD state
    subprocess.run(['git', 'checkout', commit_hash], cwd=repo_path, check=True)
    
    # Create a new branch to retain the changes
    subprocess.run(['git', 'switch', '-c', 'revert-to-previous-state'], cwd=repo_path, check=True)
    
    # Make any necessary changes (if needed)
    # For example, you might need to modify files or remove untracked files from the commit
    
    # Commit the changes
    subprocess.run(['git', 'add', '--all'], cwd=repo_path, check=True)  # Add all changes
    subprocess.run(['git', 'commit', '-m', 'Revert to previous state'], cwd=repo_path, check=True)
    
    # Push the changes to the remote repository
    subprocess.run(['git', 'push', 'origin', 'revert-to-previous-state'], cwd=repo_path, check=True)
    
    print(f"Successfully reverted to commit {commit_hash}. Changes pushed to 'revert-to-previous-state' branch.")
except subprocess.CalledProcessError as e:
    print(f"Error: {e}")
